*CAUTION: USE AN ALT ACCOUNT*
DISCLAIMER: I only use my main account that I love, but that's because I trust this. This is acting (to a degree) as closely to a native discord client.

This is currently a very botched and neutered version of the backend that's running my custom discord client. It's only got the most basic features for
logging mostly anything related to messages. You will need postgresql for the database, or you can easily add you own in database/database.js.

Using Discord websockets allows much more pure data than the offical API, with the added benefit of not being rate limited, while also being ridiculously quick.
            
- Save messages before bots can remove it for varies reasons.
- Mass save messages between all the channels in every server you are subscribed to, as long as you have the required roles.
- Look at edited messages before and after.
- Able to log messages at a rate of around 6k/min | 100/s. The limit is much, much higher, but you can only get such active servers.
  1pm & 6pm est is a good time for benchmarking

Updates
  - REMOVED: Mass join servers as lurker. Servers are fetched by server id and/or from Discover tab for endless servers |
    REASON: Kinda op because you can start to track users being in so many servers, and Discord already patched the shitty way
 
