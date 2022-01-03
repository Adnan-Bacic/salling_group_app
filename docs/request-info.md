# Request info

## Zip code length

Its important to consider zip code length when users can search for zip codes. Then we can set a maxLength prop to the input to avoid useless requests.

Denmark: 4
Germany: 5
Poland: 5/6(5, but Poland uses a "-" in between numbers so its 6)
Sweden: 5

So 6 is the absolute maximum zip code length. 4 is the minimum.