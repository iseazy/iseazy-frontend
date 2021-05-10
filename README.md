# Funny memory game.

Created with :blue_heart: by Miguel Arroyo for the isEazy development team.



## F.A.Qs about the project

### Q) We provided you a ready-to-use boilerplate. Why in the hell had you get rid of it?
A) No complains about ‘react-scripts’ -nice guys-, but I prefer to use my own custom environment. That way I know exactly what’s happening behind the scenes.

### Q) So, how can I run that f***** thing?
A) Nothing strange here: just 'run npm install' to download dependencies, run 'npm run dev' or 'npm run pro' to build the app bundle in development or production mode, and finally run 'node server.js' to get the server up.

### Q) Wait! You are not using TypeScript, propTypes, sass, [put whatever cool stuff you want]. Are you kidding me?
A) No, I focused on create a clean, cheap, and easy to maintain app. No need to overkill in such a small project. However, if that thing becomes bigger and harder...we’ll talk again (“that’s what she said” - Michael Scott).

### Q) Ok. So, how is the app structured?
A) The architecture aims to create a MVC app, composed by loosely coupled layers. That’s also a good reason to keep view components, styles, js logic and model in different folders.
