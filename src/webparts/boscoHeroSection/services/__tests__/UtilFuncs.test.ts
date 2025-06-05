import { UtilFunctions } from '../UtilFuncs';
import {prepareUserInfoMockData, organiseNewsItemsMockData, prepareNewsItemsMockData, prepareCalendarEventsMockData} from './MockData'

//
//
//buildDateString

describe('UtilFunctions.buildDateString', () => {
  it('should return a formatted date string', () => {
    const util = new UtilFunctions();
    const date = new Date('2025-06-04T00:00:00Z');
    const result = util.buildDateString(date);

    expect(result.success).toBe(true);
    expect(result.message).toBe('Date returned successfully.');
    expect(typeof result.data).toBe('string');
    expect(result.data).toBe('Wednesday 4th June 2025');
    expect(result.data.length).toBeGreaterThan(0);
  });
});

//
//
//prepareUserInfo

describe('UtilFunctions.prepareUserInfo', ()=>{
    it('should return an object in the format of IUserProps', ()=>{

        const util = new UtilFunctions();
        const result = util.prepareUserInfo(prepareUserInfoMockData.test1.data, '');

        expect(result.success).toBe(true);
        expect(result.message).toBe('User data prepared successfully.');
        expect(typeof result.data).toBe('object');
        expect(result.data).toEqual(prepareUserInfoMockData.test1.output);
    })
})

//
//
//organiseNewsItems

describe('UtilFunctions.organiseNewsItems', ()=>{
    it('should return an array of raw news item objects with the promotionKind of newsPost', ()=>{
        
        const util = new UtilFunctions();
        const result = util.organiseNewsItems(organiseNewsItemsMockData.test1.data);

        expect(result.success).toBe(true);
        expect(result.message).toBe('News items organised successfully.');
        expect(typeof result.data).toBe('object');
        expect(result.data).toEqual(organiseNewsItemsMockData.test1.output);
    })
    it('should return false after not finding any pages with the promotionKind of newsPost', ()=>{
        
        const util = new UtilFunctions();
        const result = util.organiseNewsItems(organiseNewsItemsMockData.test2.data);

        expect(result.success).toBe(true);
        expect(result.message).toBe('No News items found.');
        expect(typeof result.data).toBe('boolean');
        expect(result.data).toEqual(organiseNewsItemsMockData.test2.output);
    })
    it('should return false after recieving an empty newsData array', ()=>{

        const util = new UtilFunctions();
        const result = util.organiseNewsItems(organiseNewsItemsMockData.test3.data);

        expect(result.success).toBe(true);
        expect(result.message).toBe('No pages found.');
        expect(typeof result.data).toBe('boolean');
        expect(result.data).toEqual(organiseNewsItemsMockData.test3.output);
    })
})
//
//
//prepareNewsItems

describe('UtilFunctions.prepareNewsItems', ()=>{
    it('should return an array of objects in the format of INewsProps', ()=>{
        
        const util = new UtilFunctions();
        const result = util.prepareNewsItems(prepareNewsItemsMockData.test1.data);

        expect(result.success).toBe(true);
        expect(result.message).toBe('News prepared successfully.');
        expect(typeof result.data).toBe('object');
        expect(result.data).toEqual(prepareNewsItemsMockData.test1.output);
        expect(result.data[0].created).toBeInstanceOf(Date);
        expect(result.data.length).toBeLessThan(5);
    })
    it('should return an array of objects in the format of INewsProps and author should default to created by.', ()=>{
        
        const util = new UtilFunctions();
        const result = util.prepareNewsItems(prepareNewsItemsMockData.test2.data);

        expect(result.success).toBe(true);
        expect(result.message).toBe('News prepared successfully.');
        expect(typeof result.data).toBe('object');
        expect(result.data).toEqual(prepareNewsItemsMockData.test2.output);
        expect(result.data[0].created).toBeInstanceOf(Date);
        expect(result.data.length).toBeLessThan(5);
    })
})
//
//
//prepareCalendarEvents

describe('UtilFunctions.prepareCalendarEvents', ()=>{
    it('should return an array of objects in the format of ICalendarEventProps', ()=>{
        
        const util = new UtilFunctions();
        const result = util.prepareCalendarEvents(prepareCalendarEventsMockData.test1.data);

        expect(result.success).toBe(true);
        expect(result.message).toBe('Calendar items prepared successfully.');
        expect(typeof result.data).toBe('object');
        expect(result.data).toEqual(prepareCalendarEventsMockData.test1.output);
        expect(result.data[0].startDate).toBeInstanceOf(Date);
        expect(result.data[0].endDate).toBeInstanceOf(Date);
        expect(result.data.length).toBeLessThan(7);
    })
    it('should return false after receiving empty raw data.', ()=>{
        
        const util = new UtilFunctions();
        const result = util.prepareCalendarEvents(prepareCalendarEventsMockData.test2.data);

        expect(result.success).toBe(true);
        expect(result.message).toBe('No events found.');
        expect(typeof result.data).toBe('boolean');
        expect(result.data).toEqual(prepareCalendarEventsMockData.test2.output);
    })
})