from geopy.geocoders import Nominatim

address="Mumbai, Maharashtra, India"
geolocator=Nominatim(user_agent="address_geocoder")
location=geolocator.geocode(address)
latitude=location.latitude
longitude=location.longitude
print("Latitude = {}, Longitude = {}".format(latitude, longitude))