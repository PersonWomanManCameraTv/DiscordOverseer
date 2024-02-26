*CAUTION: USE AN ALT ACCOUNT. I'm not responsible for anything that happens*

DISCLAIMER: I only use my main account that I love, but that's because I trust this. This is acting (to a degree) as closely to a native discord client.

This is currently a very botched and neutered version of the backend that's running my custom discord client. It's only got the most basic features for
logging mostly anything related to messages. You will need postgresql for the database, or you can easily add your own in database/database.js.

There is a folder called "DiscordAPI". This was a bad naming moment on my part and this is purely just using the Discord sockets.

Using Discord websockets allows much more pure data than the offical API, with the added benefit of not being rate limited, while also being ridiculously quick.
            
- Save messages before bots can remove it for varies reasons.
- Mass save messages between all the channels in every server you are subscribed to, as long as you have the required roles.
- Look at edited messages before and after.
- Keeps socket connection handshakes alive to ensure it never stops running
- Able to log messages at a rate of around 6k/min | 100/s. The limit is much, much higher, but you can only get such active servers.
  1pm & 6pm est is a good time for benchmarking

 
 

 
 
 
VIDEO 1   
[![Demo Video](https://img.youtube.com/vi/fYGBQF932d8/0.jpg)](https://www.youtube.com/watch?v=fYGBQF932d8)

VIDEO 2   
[![Demo Video](https://img.youtube.com/vi/X0XM2XZ-yck/0.jpg)](https://www.youtube.com/watch?v=X0XM2XZ-yck)


How to start:
  1. Download the code
  2. npm i  OR npm i ws,pg
  3. Go to backend/helpers.js and add your discord token where it says
  4. npm "dir/to/DiscordOverseer/backend/app.js"


Updates
  - REMOVED: Mass join servers as lurker. Servers are fetched by server id and/or from Discover tab for endless servers |
    REASON: Kinda op because you can start to track users being in so many servers, and Discord already patched the easy method
 
