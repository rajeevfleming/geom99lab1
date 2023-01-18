# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?destination=place_id:ChIJxSs0ayYa6zkRG6-JmoL6u3M&origin=place_id:ChIJ-erCBpoZ6zkR3mHhc5EKZ8U&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ-erCBpoZ6zkR3mHhc5EKZ8U",
         "types" : [ "political", "sublocality", "sublocality_level_1" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJxSs0ayYa6zkRG6-JmoL6u3M",
         "types" : [ "airport", "establishment", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 27.7012313,
               "lng" : 85.355772
            },
            "southwest" : {
               "lat" : 27.6858,
               "lng" : 85.34083489999999
            }
         },
         "copyrights" : "Map data ©2023",
         "legs" : [
            {
               "distance" : {
                  "text" : "3.6 km",
                  "value" : 3585
               },
               "duration" : {
                  "text" : "10 mins",
                  "value" : 576
               },
               "end_address" : "Tribhuvan International Airport (KTM), Ring Rd, Kathmandu 44600, Nepal",
               "end_location" : {
                  "lat" : 27.7007733,
                  "lng" : 85.355772
               },
               "start_address" : "New Baneshwor, Kathmandu 44600, Nepal",
               "start_location" : {
                  "lat" : 27.6913352,
                  "lng" : 85.34190579999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 133
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 27.6908144,
                        "lng" : 85.34311439999999
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{m_hD}i{gOZk@Te@HSHUF[ZwA"
                     },
                     "start_location" : {
                        "lat" : 27.6913352,
                        "lng" : 85.34190579999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "74 m",
                        "value" : 74
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 27
                     },
                     "end_location" : {
                        "lat" : 27.6902697,
                        "lng" : 85.34273429999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eBhiemsengola Marga\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qj_hDmq{gOJFJJLLBFBF@@@B@@B@VDZH"
                     },
                     "start_location" : {
                        "lat" : 27.6908144,
                        "lng" : 85.34311439999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22 m",
                        "value" : 22
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 27.6901031,
                        "lng" : 85.34285629999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBhiemsengola Marga\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "eg_hDao{gO`@Y"
                     },
                     "start_location" : {
                        "lat" : 27.6902697,
                        "lng" : 85.34273429999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 308
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 27.6881715,
                        "lng" : 85.3408879
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eThulo Kharibot Marga\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cf_hD{o{gO\\Nd@RRHXLh@XJHFDJFDDDB`@^f@ZJJTVj@j@FDDHFJDJDR@JALAR?L?D@F"
                     },
                     "start_location" : {
                        "lat" : 27.6901031,
                        "lng" : 85.34285629999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 104
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 21
                     },
                     "end_location" : {
                        "lat" : 27.6872724,
                        "lng" : 85.34083489999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN.K.Singh Marg\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "az~gDqc{gO`@KREPAT@tA\\"
                     },
                     "start_location" : {
                        "lat" : 27.6881715,
                        "lng" : 85.3408879
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 598
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 84
                     },
                     "end_location" : {
                        "lat" : 27.6858041,
                        "lng" : 85.3466608
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMadan Bhandari Road\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mt~gDec{gOh@_Df@eERkADKBKJUJYDS\\_C@EJo@DYFe@Fe@Lw@PoABQb@}CLk@"
                     },
                     "start_location" : {
                        "lat" : 27.6872724,
                        "lng" : 85.34083489999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 421
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 27.6871758,
                        "lng" : 85.35044359999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eMadan Bhandari Road\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "gk~gDsg|gOE_AAG@K@UBs@EkBK{@Ou@I[I_@M]Uk@IO_@u@uAeBy@eA"
                     },
                     "start_location" : {
                        "lat" : 27.6858041,
                        "lng" : 85.3466608
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1680
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 212
                     },
                     "end_location" : {
                        "lat" : 27.7008945,
                        "lng" : 85.35349599999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRing Road\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "{s~gDg_}gOuAw@k@]y@a@GCk@WMGy@_@CA{E{BaAe@_By@uBaAyHoDoG_DqCkAQIu@MQCo@E[AO?s@Eg@Cu@EwAKq@Eg@Au@?c@?UBa@DUBk@JWF]JWJWJUHKFc@Vw@j@kDbCEBGDOLc@ZIF"
                     },
                     "start_location" : {
                        "lat" : 27.6871758,
                        "lng" : 85.35044359999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 245
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 27.7007733,
                        "lng" : 85.355772
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qiahDkr}gOU]UYEIKc@CQAQ?S?QDc@ZmAn@iCHY"
                     },
                     "start_location" : {
                        "lat" : 27.7008945,
                        "lng" : 85.35349599999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "{m_hD}i{gOp@qARi@b@sBVRV^BDZFZH`@YbAb@bBz@^VhAz@`@b@r@p@LTJ^?XA`@@Lt@Qf@?tA\\h@_Df@eERkAHWVo@p@iEb@}CTaBp@iEGgABa@Bs@EkB[qBS{@c@iAi@eAoCkDaCuAaAe@wBaAsN}GyHoDoG_DcDuAgAQkAGaDOiCQ}AAy@Bw@HcARu@Vm@To@^qFxD}@p@k@w@Qm@Ec@?e@Dc@ZmAx@cD"
         },
         "summary" : "Madan Bhandari Road and Ring Road",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
