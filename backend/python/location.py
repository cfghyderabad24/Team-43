# location.py
import sys
from geopy.geocoders import Nominatim

def get_lat_long(address):
    geolocator = Nominatim(user_agent="address_geocoder")
    location = geolocator.geocode(address)
    if location:
        return location.latitude, location.longitude
    else:
        return None, None

if __name__ == "__main__":
    address = sys.argv[1]
    lat, long = get_lat_long(address)
    if lat and long:
        print(f"{lat},{long}")
    else:
        print("Location not found")
