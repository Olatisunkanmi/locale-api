# README.md

## Location Data API

This is a RESTful API built with Node.js and Express, which provides location data, specifically for regions, states and local governments in Nigeria.

This API uses a database of location data and a caching mechanism for better performance. You will need to provide an API key for authorization. The API endpoints can be found below.

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your local machine. [Install](https://nodejs.org/en/download/)

I have hosted it on: Render : https://locale-api-u09p.onrender.com/

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Olatisunkanmi/locale-api
   ```
2. Navigate into the project directory:
   ```
   cd locale-api
   ```
3. Install the project dependencies:
   ```
   npm install
   ```
4. Make a copy of .env.sample as .env and populate file with required credentials

   ```sh
   cp .env.sample .env
   ```

5. Start the development server:
   ```
   npm start:dev
   ```

---

## API Endpoints

The API provides the following endpoints:

1. **Get Regions**: `location/region`

   Fetches the data of a specific region or all regions if no region name is provided. You can also specify whether you want to include Local Government Areas (LGAs) by setting the `lga` query parameter to `true`.

2. **Get States**: `location/states`

   Fetches the data of a specific state or all states if no state name is provided. You can also specify whether you want to include Local Government Areas (LGAs) by setting the `lga` query parameter to `true`.

3. **Get States By Id**: `location/states/:id`

Fetches the data of a specific state according to the number/id. You can also specify whether you want to include Local Government Areas (LGAs) by setting the `lga` query parameter to `true`.

3. **Get Local Government**: `location/lga`

   Fetches the data of a specific or all local government.

---

### API Usage

To test on your local with swagger, use

```
localhost:3000/api-docs
```

The API uses bearer token for authorization, so you have to include your API key in the Authorization header as follows:

```
Authorization: your_api_key
```

Here is an example of how to use the API:

**Request:**

```
GET /state?state_name=kebbi
Authorization: your_api_key
```

**Response:**

```
{
    "status": "success",
    "message": "States retrieved successfully",
    "data": {
        "id": 18,
        "state": "Kebbi",
        "capital": "Birnin Kebbi",
        "slogan": "Land of Equity",
        "senatorial_districts": [
            "Kebbi Central",
            "Kebbi North",
            "Kebbi South"
        ],
        "landmass": "36,800 km2 (14,200 sq mi)",
        "population": "3,238,628",
        "dialect": "Hausa",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Akwa_Ibom_state_map.png/250px-Nigeria_Akwa_Ibom_state_map.png",
        "latitude": "12.4500",
        "longitude": "4.1994",
        "website": "http://www.kebbistate.gov.ng/",
        "geo_politcal_zone": "North West",
        "created_date": "27 August 1991",
        "created_by": "Ibrahim Babangida",
        "borders": [
            "Niger",
            "Zamfara",
            "Katsina",
            "Sokoto"
        ],
        "past_governors": [
            "Abubakar Musa",
            "Adamu Aliero",
            "Usman Saidu Nasamu Dakingari",
            "Abubakar Atiku Bagudu"
        ],
        "known_for": [
            "Kanta National Museum, Argungun",
            "Argungu Fishing Festival, Argungu",
            "Kanta Museum, Argungu",
            "Girmache Shrine, Zuru",
            "Karishi Traditional Settlement, Karishi"
        ]
    }
}
```

You could also search for multiple states, regions or local govenments if you wish

**Request:**

```
GET /state?state_name=lagos,edo&lga=false
Authorization: your_api_key
```

**Response:**

```
{
    "status": "success",
    "message": "States retrieved successfully",
    "data": {
        "id": 5,
        "state": "Bauchi",
        "capital": "Bauchi",
        "slogan": "Pearl of Tourism",
        "senatorial_districts": [
            "Bauchi Central",
            "Bauchi North",
            "Bauchi South"
        ],
        "landmass": "49,119 km2 (18,962 sq mi)",
        "population": "4,653,066",
        "dialect": "Hausa",
        "map": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Nigeria_Akwa_Ibom_state_map.png/250px-Nigeria_Akwa_Ibom_state_map.png",
        "latitude": "10.3158",
        "longitude": "9.8442",
        "website": "http://www.bauchistate.gov.ng/",
        "geo_politcal_zone": "North East",
        "created_date": "3 February 1976",
        "created_by": "General Murtala Mohammed",
        "past_governors": [
            "Muhammadu Buhari",
            "Abdulkadir Ahmed",
            "Abdullahi Sarki Mukhtar",
            "Ahmed Adamu Mu'azu",
            "Adamu Mu'azu",
            "Isa Yuguda",
            "Muhammad Abdullahi Abubakar"
        ],
        "borders": [
            "Kano",
            "Jigawa",
            "Plateau",
            "Taraba",
            "Gombe",
            "Yobe"
        ],
        "known_for": [
            "Yankari National Park",
            "Sumu Wildlife Reserve",
            "Wiki Warm Springs",
            "Emir's Palace",
            "Bauchi Central Mosque",
            "Bauchi State Library"
        ]
    }
}
```

---

## Contributing

If you would like to contribute to this project, please feel free to fork the repository, create a feature branch, and open a Pull Request!

---

## Contact

If you have any questions about this project, please feel free to open an issue or directly contact the project owner.

---
