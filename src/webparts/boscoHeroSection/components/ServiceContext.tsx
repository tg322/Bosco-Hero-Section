import * as React from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { MSGraphClientV3 } from '@microsoft/sp-http';

import { Service } from '../utils/Service';
import { DataHandler, GraphDataHandler } from '../utils/Helpers';
import { UtilFunctions } from '../utils/UtilFuncs';
import { responseBuilder } from '../utils/BuildResponse';

//This context serves the svc object to the rest of the app, this allows News and Calendar to fetch their own data.

// === Context Types ===
interface ServiceContextValue {
  svc: Service;
}

const ServiceContext = createContext<ServiceContextValue | undefined>(undefined);

// === Hook to Use Context ===
export const useServiceContext = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useServiceContext must be used within a ServiceProvider');
  }
  return context;
};

// === Provider Props ===
interface ServiceProviderProps {
  context: WebPartContext;
  children: React.ReactNode;
}

// === Context Provider ===
export const ServiceProvider: React.FC<ServiceProviderProps> = ({ context, children }) => {
  const [client, setClient] = useState<MSGraphClientV3 | null>(null);

  // Load Graph Client on mount
  useEffect(() => {
    context.msGraphClientFactory.getClient('3').then(setClient);
  }, [context]);

  // Memoize the Service *after* client is ready
  const svc = useMemo(() => {
    if (!client) return null;
    return new Service(
      new DataHandler(),
      new GraphDataHandler(client),
      new UtilFunctions(),
      new responseBuilder(),
      context
    );
  }, [client, context]);

  // Don't render children until service is ready
  if (!svc) return null;

  return (
    <ServiceContext.Provider value={{ svc }}>
      {children}
    </ServiceContext.Provider>
  );
};
