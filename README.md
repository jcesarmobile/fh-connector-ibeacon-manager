FORMAT: 1A

# FeedHenry iBeacon Manager

Management API for iBeacons within the platform.

# Group iBeacon Manager API

# Beacons API [/cloud/beacons]

iBeacon API

## Retrieve Entry Point [GET]

+ Response 200 (application/json)
    + Body
            {
                1234: {
                    "major" : 1,
                    "minor" : 1,
                    "label": "Some Label Title",
                    "sublabel": "Some Label Description"
                }
            }

## Create iBeacon [POST]

Create an iBeacon to manage within the platform. Fill in a major and minor ID below to setup your iBeacon

+ Request (application/json)
    + Body
            {
              "major" : 1,
              "minor" : 1,
              "label": "Some Label Title",
              "sublabel": "Some Label Description"
            }

+ Response 200 (application/json)
    + Body
            {
              "ok": "true"
            }
