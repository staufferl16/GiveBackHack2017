# GiveBackHack2017 - Team Dream Time / DACA Now
GiveBackHack is a community-focused entrepreneurial business hack event.  During GiveBackHack, individuals pitch a business idea that directly benefits the community of Columbus, Ohio, and beyond.  After pitches have been given, participants joined teams based on which idea they favored the most.  Dream Time, the team I joined, originally started as a "TurboTax for DACA application."  This endeavor sought to, at the very least, simplify the form populating process by creating a technology-based platform through which individuals could apply for DACA without being potentially subjected to the exploitative costs that some lawyers had been charging for a similar service.  This frontend project was whipped up in less than 10 hours from scratch.  It is a simple, single-page application with a rough form for collecting enough information to fill out the first page of the application.  This information was sent to a backend that populated the form and returned it as a PDF.  

## Steps for getting the code to run locally.
1. Clone this repo
2. Cd into the top level of this project
3. Run `npm install`
4. Compile static code from Angular2/TypeScript frontend code by running `npm run build`
5. Either serve that static however you please or navigate in your browser to `localhost:3000`

## For frontend development:
This frontend application uses webpack for dependency mapping and serving.  Wepback has change detection, so code will
update as you edit the code.
