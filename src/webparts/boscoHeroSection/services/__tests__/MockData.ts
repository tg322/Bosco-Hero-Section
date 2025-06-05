//prepareUserInfo TESTS

//#1
const prepareUserInfoTestData1 = {
            "@odata.context": "",
            "displayName": "John Appleseed",
            "givenName": "John",
            "id": "abcdefg123-12fd-4f85-b0a8-159487ebd123456"
        }

const prepareUserInfoTestExpectedData = {"firstName": "John", "fullName": "John Appleseed", "id": "abcdefg123-12fd-4f85-b0a8-159487ebd123456", "initials": "JA", "photo": ""}

export const prepareUserInfoMockData = {test1:{data:prepareUserInfoTestData1, output:prepareUserInfoTestExpectedData}}

//organiseNewsItems TESTS

//#1
const organiseNewsItemsTestData1 = 
        [
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Known & Loved",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "John Appleseed",
                        "email": "jappleseed@example.co.uk"
                    }
                }
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Ressurrection",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "John Appleseed",
                        "email": "jappleseed@example.co.uk"
                    }
                }
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Our Schools",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "page",
                "createdBy": {
                    "user": {
                        "displayName": "John Appleseed",
                        "email": "jappleseed@example.co.uk"
                    }
                }
            }
        ]

const organiseNewsItemsTestExpectedData1 = 
        [
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Known & Loved",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "John Appleseed",
                        "email": "jappleseed@example.co.uk"
                    }
                }
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Ressurrection",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "John Appleseed",
                        "email": "jappleseed@example.co.uk"
                    }
                }
            }
        ]

//#2

const organiseNewsItemsTestData2 = 
        [
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Known & Loved",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "page",
                "createdBy": {
                    "user": {
                        "displayName": "John Appleseed",
                        "email": "jappleseed@example.co.uk"
                    }
                }
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Ressurrection",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "page",
                "createdBy": {
                    "user": {
                        "displayName": "John Appleseed",
                        "email": "jappleseed@example.co.uk"
                    }
                }
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Our Schools",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "page",
                "createdBy": {
                    "user": {
                        "displayName": "John Appleseed",
                        "email": "jappleseed@example.co.uk"
                    }
                }
            }
        ]

const organiseNewsItemsTestExpectedData2 = false;

//#3

const organiseNewsItemsTestData3:any = []

const organiseNewsItemsTestExpectedData3 = false;

export const organiseNewsItemsMockData = {
    test1:{data:organiseNewsItemsTestData1, output:organiseNewsItemsTestExpectedData1},
    test2:{data:organiseNewsItemsTestData2, output:organiseNewsItemsTestExpectedData2},
    test3:{data:organiseNewsItemsTestData3, output:organiseNewsItemsTestExpectedData3}
}


//prepareNewsItems TESTS

//#1

const prepareNewsItemsTestData1 = 
        [
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Known & Loved",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "Jane Doe",
                        "email": "jdoe@example.co.uk"
                    }
                },
                "titleDataResult":[
                    {
                        "data":{
                            "properties":{
                                "authors":[
                                    {
                                        "email": "jappleseed@example.co.uk",
                                        "name": "John Appleseed"
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Ressurrection",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "Jane Doe",
                        "email": "jdoe@example.co.uk"
                    }
                },
                "titleDataResult":[
                    {
                        "data":{
                            "properties":{
                                "authors":[
                                    {
                                        "email": "jappleseed@example.co.uk",
                                        "name": "John Appleseed"
                                    }
                                ]
                            }
                        }
                    }
                ]
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Our Schools",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "Jane Doe",
                        "email": "jdoe@example.co.uk"
                    }
                },
                "titleDataResult":[
                    {
                        "data":{
                            "properties":{
                                "authors":[
                                    {
                                        "email": "jappleseed@example.co.uk",
                                        "name": "John Appleseed"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ]

const prepareNewsItemsTestExpectedData1 = 
        [
            {
                "title":"Known & Loved",
                "created": new Date('2025-05-14T14:51:53Z'),
                "url":"https://exampleURL.co.uk",
                "thumbnail":"https://exampleURL.co.uk",
                "authorName":"John Appleseed",
                "authorEmail":"jappleseed@example.co.uk"
            },
            {
                "title":"Ressurrection",
                "created": new Date('2025-05-14T14:51:53Z'),
                "url":"https://exampleURL.co.uk",
                "thumbnail":"https://exampleURL.co.uk",
                "authorName":"John Appleseed",
                "authorEmail":"jappleseed@example.co.uk"
            },
            {
                "title":"Our Schools",
                "created": new Date('2025-05-14T14:51:53Z'),
                "url":"https://exampleURL.co.uk",
                "thumbnail":"https://exampleURL.co.uk",
                "authorName":"John Appleseed",
                "authorEmail":"jappleseed@example.co.uk"
            }
        ]

const prepareNewsItemsTestData2 = 
        [
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Known & Loved",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "Jane Doe",
                        "email": "jdoe@example.co.uk"
                    }
                }
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Ressurrection",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "Jane Doe",
                        "email": "jdoe@example.co.uk"
                    }
                }
            },
            {
                "createdDateTime": "2025-05-14T14:51:53Z",
                "webUrl": "https://exampleURL.co.uk",
                "title": "Our Schools",
                "thumbnailWebUrl": "https://exampleURL.co.uk",
                "promotionKind": "newsPost",
                "createdBy": {
                    "user": {
                        "displayName": "Jane Doe",
                        "email": "jdoe@example.co.uk"
                    }
                }
            }
        ]

const prepareNewsItemsTestExpectedData2 = 
        [
            {
                "title":"Known & Loved",
                "created": new Date('2025-05-14T14:51:53Z'),
                "url":"https://exampleURL.co.uk",
                "thumbnail":"https://exampleURL.co.uk",
                "authorName":"Jane Doe",
                "authorEmail":"jdoe@example.co.uk"
            },
            {
                "title":"Ressurrection",
                "created": new Date('2025-05-14T14:51:53Z'),
                "url":"https://exampleURL.co.uk",
                "thumbnail":"https://exampleURL.co.uk",
                "authorName":"Jane Doe",
                "authorEmail":"jdoe@example.co.uk"
            },
            {
                "title":"Our Schools",
                "created": new Date('2025-05-14T14:51:53Z'),
                "url":"https://exampleURL.co.uk",
                "thumbnail":"https://exampleURL.co.uk",
                "authorName":"Jane Doe",
                "authorEmail":"jdoe@example.co.uk"
            }
        ]

export const prepareNewsItemsMockData = {
    test1:{data:prepareNewsItemsTestData1, output:prepareNewsItemsTestExpectedData1},
    test2:{data:prepareNewsItemsTestData2, output:prepareNewsItemsTestExpectedData2}
}

const prepareCalendarEventsTestData1 =  [{
            "@odata.etag": "W/\"AOWHD29U83POIJWJEFKDSLK\"",
            "id": "W[OID203URMCE0U-M0U3RUWM-E0CRU3-9UR-8W0MUC-CUMQ-02U3MC[0UM0EUAIOMPOCFIOPIQJ34P08U2PC MUPOICMFPOIAJSAPOIUPOIEUWEWWW9U9U3[R2ICUR-U",
            "createdDateTime": "2025-02-06T08:56:56.9080376Z",
            "lastModifiedDateTime": "2025-02-13T14:08:42.0916818Z",
            "changeKey": "joh2-kswajdj230roijij",
            "categories": [
                "Blue category"
            ],
            "transactionId": "2-30e8-023rc-029392-c2cmr2093",
            "originalStartTimeZone": "GMT Standard Time",
            "originalEndTimeZone": "GMT Standard Time",
            "iCalUId": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "uid": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "reminderMinutesBeforeStart": 15,
            "isReminderOn": true,
            "hasAttachments": false,
            "subject": "Maths Leads: Network Meeting",
            "bodyPreview": "",
            "importance": "normal",
            "sensitivity": "normal",
            "isAllDay": false,
            "isCancelled": false,
            "isOrganizer": true,
            "responseRequested": true,
            "seriesMasterId": null,
            "showAs": "busy",
            "type": "singleInstance",
            "webLink": "https://www.example-calendar-url.co.uk",
            "onlineMeetingUrl": null,
            "isOnlineMeeting": false,
            "onlineMeetingProvider": "unknown",
            "allowNewTimeProposals": true,
            "occurrenceId": null,
            "isDraft": false,
            "hideAttendees": false,
            "responseStatus": {
                "response": "organizer",
                "time": "0001-01-01T00:00:00Z"
            },
            "body": {
                "contentType": "html",
                "content": ""
            },
            "start": {
                "dateTime": "2025-06-05T16:30:00.0000000",
                "timeZone": "Europe/London"
            },
            "end": {
                "dateTime": "2025-06-05T17:30:00.0000000",
                "timeZone": "Europe/London"
            },
            "location": {
                "displayName": "",
                "locationType": "default",
                "uniqueIdType": "unknown",
                "address": {},
                "coordinates": {}
            },
            "locations": [],
            "recurrence": null,
            "attendees": [],
            "organizer": {
                "emailAddress": {
                    "name": "Test Calendar",
                    "address": "testCalendar@example.co.uk"
                }
            },
            "onlineMeeting": null
        },
        {
            "@odata.etag": "W/\"AOWHD29U83POIJWJEFKDSLK\"",
            "id": "W[OID203URMCE0U-M0U3RUWM-E0CRU3-9UR-8W0MUC-CUMQ-02U3MC[0UM0EUAIOMPOCFIOPIQJ34P08U2PC MUPOICMFPOIAJSAPOIUPOIEUWEWWW9U9U3[R2ICUR-U",
            "createdDateTime": "2025-02-06T08:56:56.9080376Z",
            "lastModifiedDateTime": "2025-02-13T14:08:42.0916818Z",
            "changeKey": "joh2-kswajdj230roijij",
            "categories": [
                "Blue category"
            ],
            "transactionId": "2-30e8-023rc-029392-c2cmr2093",
            "originalStartTimeZone": "GMT Standard Time",
            "originalEndTimeZone": "GMT Standard Time",
            "iCalUId": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "uid": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "reminderMinutesBeforeStart": 15,
            "isReminderOn": true,
            "hasAttachments": false,
            "subject": "Heads Meeting",
            "bodyPreview": "",
            "importance": "normal",
            "sensitivity": "normal",
            "isAllDay": false,
            "isCancelled": false,
            "isOrganizer": true,
            "responseRequested": true,
            "seriesMasterId": null,
            "showAs": "busy",
            "type": "singleInstance",
            "webLink": "https://www.example-calendar-url.co.uk",
            "onlineMeetingUrl": null,
            "isOnlineMeeting": false,
            "onlineMeetingProvider": "unknown",
            "allowNewTimeProposals": true,
            "occurrenceId": null,
            "isDraft": false,
            "hideAttendees": false,
            "responseStatus": {
                "response": "organizer",
                "time": "0001-01-01T00:00:00Z"
            },
            "body": {
                "contentType": "html",
                "content": ""
            },
            "start": {
                "dateTime": "2025-06-09T08:00:00.0000000",
                "timeZone": "Europe/London"
            },
            "end": {
                "dateTime": "2025-06-09T08:30:00.0000000",
                "timeZone": "Europe/London"
            },
            "location": {
                "displayName": "",
                "locationType": "default",
                "uniqueIdType": "unknown",
                "address": {},
                "coordinates": {}
            },
            "locations": [],
            "recurrence": null,
            "attendees": [],
            "organizer": {
                "emailAddress": {
                    "name": "Test Calendar",
                    "address": "testCalendar@example.co.uk"
                }
            },
            "onlineMeeting": null
        },
        {
            "@odata.etag": "W/\"AOWHD29U83POIJWJEFKDSLK\"",
            "id": "W[OID203URMCE0U-M0U3RUWM-E0CRU3-9UR-8W0MUC-CUMQ-02U3MC[0UM0EUAIOMPOCFIOPIQJ34P08U2PC MUPOICMFPOIAJSAPOIUPOIEUWEWWW9U9U3[R2ICUR-U",
            "createdDateTime": "2025-02-06T08:56:56.9080376Z",
            "lastModifiedDateTime": "2025-02-13T14:08:42.0916818Z",
            "changeKey": "joh2-kswajdj230roijij",
            "categories": [
                "Blue category"
            ],
            "transactionId": "2-30e8-023rc-029392-c2cmr2093",
            "originalStartTimeZone": "GMT Standard Time",
            "originalEndTimeZone": "GMT Standard Time",
            "iCalUId": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "uid": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "reminderMinutesBeforeStart": 15,
            "isReminderOn": true,
            "hasAttachments": false,
            "subject": "SLT Meeting",
            "bodyPreview": "",
            "importance": "normal",
            "sensitivity": "normal",
            "isAllDay": false,
            "isCancelled": false,
            "isOrganizer": true,
            "responseRequested": true,
            "seriesMasterId": null,
            "showAs": "busy",
            "type": "singleInstance",
            "webLink": "https://www.example-calendar-url.co.uk",
            "onlineMeetingUrl": null,
            "isOnlineMeeting": false,
            "onlineMeetingProvider": "unknown",
            "allowNewTimeProposals": true,
            "occurrenceId": null,
            "isDraft": false,
            "hideAttendees": false,
            "responseStatus": {
                "response": "organizer",
                "time": "0001-01-01T00:00:00Z"
            },
            "body": {
                "contentType": "html",
                "content": ""
            },
            "start": {
                "dateTime": "2025-06-10T16:30:00.0000000",
                "timeZone": "Europe/London"
            },
            "end": {
                "dateTime": "2025-06-10T17:00:00.0000000",
                "timeZone": "Europe/London"
            },
            "location": {
                "displayName": "",
                "locationType": "default",
                "uniqueIdType": "unknown",
                "address": {},
                "coordinates": {}
            },
            "locations": [],
            "recurrence": null,
            "attendees": [],
            "organizer": {
                "emailAddress": {
                    "name": "Test Calendar",
                    "address": "testCalendar@example.co.uk"
                }
            },
            "onlineMeeting": null
        },
        {
            "@odata.etag": "W/\"AOWHD29U83POIJWJEFKDSLK\"",
            "id": "W[OID203URMCE0U-M0U3RUWM-E0CRU3-9UR-8W0MUC-CUMQ-02U3MC[0UM0EUAIOMPOCFIOPIQJ34P08U2PC MUPOICMFPOIAJSAPOIUPOIEUWEWWW9U9U3[R2ICUR-U",
            "createdDateTime": "2025-02-06T08:56:56.9080376Z",
            "lastModifiedDateTime": "2025-02-13T14:08:42.0916818Z",
            "changeKey": "joh2-kswajdj230roijij",
            "categories": [
                "Blue category"
            ],
            "transactionId": "2-30e8-023rc-029392-c2cmr2093",
            "originalStartTimeZone": "GMT Standard Time",
            "originalEndTimeZone": "GMT Standard Time",
            "iCalUId": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "uid": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "reminderMinutesBeforeStart": 15,
            "isReminderOn": true,
            "hasAttachments": false,
            "subject": "Governors Meeting",
            "bodyPreview": "",
            "importance": "normal",
            "sensitivity": "normal",
            "isAllDay": false,
            "isCancelled": false,
            "isOrganizer": true,
            "responseRequested": true,
            "seriesMasterId": null,
            "showAs": "busy",
            "type": "singleInstance",
            "webLink": "https://www.example-calendar-url.co.uk",
            "onlineMeetingUrl": null,
            "isOnlineMeeting": false,
            "onlineMeetingProvider": "unknown",
            "allowNewTimeProposals": true,
            "occurrenceId": null,
            "isDraft": false,
            "hideAttendees": false,
            "responseStatus": {
                "response": "organizer",
                "time": "0001-01-01T00:00:00Z"
            },
            "body": {
                "contentType": "html",
                "content": ""
            },
            "start": {
                "dateTime": "2025-06-12T08:00:00.0000000",
                "timeZone": "Europe/London"
            },
            "end": {
                "dateTime": "2025-06-12T08:30:00.0000000",
                "timeZone": "Europe/London"
            },
            "location": {
                "displayName": "",
                "locationType": "default",
                "uniqueIdType": "unknown",
                "address": {},
                "coordinates": {}
            },
            "locations": [],
            "recurrence": null,
            "attendees": [],
            "organizer": {
                "emailAddress": {
                    "name": "Test Calendar",
                    "address": "testCalendar@example.co.uk"
                }
            },
            "onlineMeeting": null
        },
        {
            "@odata.etag": "W/\"AOWHD29U83POIJWJEFKDSLK\"",
            "id": "W[OID203URMCE0U-M0U3RUWM-E0CRU3-9UR-8W0MUC-CUMQ-02U3MC[0UM0EUAIOMPOCFIOPIQJ34P08U2PC MUPOICMFPOIAJSAPOIUPOIEUWEWWW9U9U3[R2ICUR-U",
            "createdDateTime": "2025-02-06T08:56:56.9080376Z",
            "lastModifiedDateTime": "2025-02-13T14:08:42.0916818Z",
            "changeKey": "joh2-kswajdj230roijij",
            "categories": [
                "Blue category"
            ],
            "transactionId": "2-30e8-023rc-029392-c2cmr2093",
            "originalStartTimeZone": "GMT Standard Time",
            "originalEndTimeZone": "GMT Standard Time",
            "iCalUId": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "uid": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "reminderMinutesBeforeStart": 15,
            "isReminderOn": true,
            "hasAttachments": false,
            "subject": "Maths Assessment",
            "bodyPreview": "",
            "importance": "normal",
            "sensitivity": "normal",
            "isAllDay": false,
            "isCancelled": false,
            "isOrganizer": true,
            "responseRequested": true,
            "seriesMasterId": null,
            "showAs": "busy",
            "type": "singleInstance",
            "webLink": "https://www.example-calendar-url.co.uk",
            "onlineMeetingUrl": null,
            "isOnlineMeeting": false,
            "onlineMeetingProvider": "unknown",
            "allowNewTimeProposals": true,
            "occurrenceId": null,
            "isDraft": false,
            "hideAttendees": false,
            "responseStatus": {
                "response": "organizer",
                "time": "0001-01-01T00:00:00Z"
            },
            "body": {
                "contentType": "html",
                "content": ""
            },
            "start": {
                "dateTime": "2025-06-13T08:00:00.0000000",
                "timeZone": "Europe/London"
            },
            "end": {
                "dateTime": "2025-06-13T08:30:00.0000000",
                "timeZone": "Europe/London"
            },
            "location": {
                "displayName": "",
                "locationType": "default",
                "uniqueIdType": "unknown",
                "address": {},
                "coordinates": {}
            },
            "locations": [],
            "recurrence": null,
            "attendees": [],
            "organizer": {
                "emailAddress": {
                    "name": "Test Calendar",
                    "address": "testCalendar@example.co.uk"
                }
            },
            "onlineMeeting": null
        },
        {
            "@odata.etag": "W/\"AOWHD29U83POIJWJEFKDSLK\"",
            "id": "W[OID203URMCE0U-M0U3RUWM-E0CRU3-9UR-8W0MUC-CUMQ-02U3MC[0UM0EUAIOMPOCFIOPIQJ34P08U2PC MUPOICMFPOIAJSAPOIUPOIEUWEWWW9U9U3[R2ICUR-U",
            "createdDateTime": "2025-02-06T08:56:56.9080376Z",
            "lastModifiedDateTime": "2025-02-13T14:08:42.0916818Z",
            "changeKey": "joh2-kswajdj230roijij",
            "categories": [
                "Blue category"
            ],
            "transactionId": "2-30e8-023rc-029392-c2cmr2093",
            "originalStartTimeZone": "GMT Standard Time",
            "originalEndTimeZone": "GMT Standard Time",
            "iCalUId": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "uid": "0000000000000000000wwwwwwwwwwwww0000000000222222222222000dddddddddd000000000000000000222222222222000000000dqqqqq",
            "reminderMinutesBeforeStart": 15,
            "isReminderOn": true,
            "hasAttachments": false,
            "subject": "English Assessment",
            "bodyPreview": "",
            "importance": "normal",
            "sensitivity": "normal",
            "isAllDay": false,
            "isCancelled": false,
            "isOrganizer": true,
            "responseRequested": true,
            "seriesMasterId": null,
            "showAs": "busy",
            "type": "singleInstance",
            "webLink": "https://www.example-calendar-url.co.uk",
            "onlineMeetingUrl": null,
            "isOnlineMeeting": false,
            "onlineMeetingProvider": "unknown",
            "allowNewTimeProposals": true,
            "occurrenceId": null,
            "isDraft": false,
            "hideAttendees": false,
            "responseStatus": {
                "response": "organizer",
                "time": "0001-01-01T00:00:00Z"
            },
            "body": {
                "contentType": "html",
                "content": ""
            },
            "start": {
                "dateTime": "2025-06-17T17:00:00.0000000",
                "timeZone": "Europe/London"
            },
            "end": {
                "dateTime": "2025-06-17T17:30:00.0000000",
                "timeZone": "Europe/London"
            },
            "location": {
                "displayName": "",
                "locationType": "default",
                "uniqueIdType": "unknown",
                "address": {},
                "coordinates": {}
            },
            "locations": [],
            "recurrence": null,
            "attendees": [],
            "organizer": {
                "emailAddress": {
                    "name": "Test Calendar",
                    "address": "testCalendar@example.co.uk"
                }
            },
            "onlineMeeting": null
        }
    ]

const prepareCalendarEventsTestExpectedData1 = [{
            "subject": "Maths Leads: Network Meeting",
            "startDate": new Date('2025-06-05T16:30:00.0000000'),
            "endDate": new Date('2025-06-05T17:30:00.0000000'),
            "startTime": "16:30",
            "endTime": "17:30",
            "webLink": "https://www.example-calendar-url.co.uk"
        },
        {
            "subject": "Heads Meeting",
            "startDate": new Date('2025-06-09T08:00:00.0000000'),
            "endDate": new Date('2025-06-09T08:30:00.0000000'),
            "startTime": "08:00",
            "endTime": "08:30",
            "webLink": "https://www.example-calendar-url.co.uk"
        },
        {
            "subject": "SLT Meeting",
            "startDate": new Date('2025-06-10T16:30:00.0000000'),
            "endDate": new Date('2025-06-10T17:00:00.0000000'),
            "startTime": "16:30",
            "endTime": "17:00",
            "webLink": "https://www.example-calendar-url.co.uk"
        },
        {
            "subject": "Governors Meeting",
            "startDate": new Date('2025-06-12T08:00:00.0000000'),
            "endDate": new Date('2025-06-12T08:30:00.0000000'),
            "startTime": "08:00",
            "endTime": "08:30",
            "webLink": "https://www.example-calendar-url.co.uk"
        },
        {
            "subject": "Maths Assessment",
            "startDate": new Date('2025-06-13T08:00:00.0000000'),
            "endDate": new Date('2025-06-13T08:30:00.0000000'),
            "startTime": "08:00",
            "endTime": "08:30",
            "webLink": "https://www.example-calendar-url.co.uk"
        },
        {
            "subject": "English Assessment",
            "startDate": new Date('2025-06-17T17:00:00.0000000'),
            "endDate": new Date('2025-06-17T17:30:00.0000000'),
            "startTime": "17:00",
            "endTime": "17:30",
            "webLink": "https://www.example-calendar-url.co.uk"
        }
        
    ]

const prepareCalendarEventsTestData2:any = [];
const prepareCalendarEventsTestExpectedData2 = false;


export const prepareCalendarEventsMockData = {
    test1:{data:prepareCalendarEventsTestData1, output:prepareCalendarEventsTestExpectedData1},
    test2:{data:prepareCalendarEventsTestData2, output:prepareCalendarEventsTestExpectedData2}
}