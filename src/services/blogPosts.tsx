import React from 'react'

const posts: BlogPosts = [
    {
        date: '3/7/22',
        post: <p>
                Progress on the frontend is going well, I've been borrowing elements from a few templates I found online which I think make a really big difference.
                The site has now been transformed from a basic static site to a responsive/reactive site, that will be easy to expand upon if I ever want to.
                <br/>
                Still need to plug the Strava data back into the site once I've got the widgets finalised and might have to come up with a logo for the top left corner
            </p>
    },
    {
        date: '27/6/22',
        post: <p>
                Aaaaannnndd done! Well version one anyway, it looks a little basic but as you can probably tell I can know pull data out from strava every time someone visits the page and load up some basic stats. 
                Had to refactor the backend code from the original structure to get it to work once or twice (well 3 times) to get it to play nice with the framework, which given the unhelpful error messages was a lot of hard work to figure out.
                Also just want to add that deploying this first version was a right pain due to packages not playing nice, but it's done, it's out, and it's live!!!
                <br/><br/>
                Now that V1 is done and the basic backend is in place, I'll look at improving the frontend. I'm currently using React & MaterialUI so I should be able to find
                some reusable components as well as some general inspriraiton to make this thing actually look decent
            </p>
    },
    {
        date: '10/6/22',
        post: <p>
                Welcome! This page was made using a bit of React, a bit of NodeJs and a dab of Typescript and a shoutout to Coolors for giving me colour palette ideas.
                Creating a dashboard for my strava runs has been a little hobby of mine for a while. 
                I initially concieved the idea about 9 months ago at the time of writing, but unfortunetly never made very far.
                Bogged down by the chocies of frameworks, technologies and all the other bits that encompase today's web developement, 
                being a general busy bod and having spent the day just doing a bunch of react/js for my (now previous) day job, finding the time & motivation
                to actually put a decent amount of hours anywhere was difficult and the project just fell by the way side
                <br/><br/>
                Until now! With Fridays now free, new found motivation as well as now being a better developer than I was, 
                I now have a better understanding of how to approach the FE & BE to this project, what technologies to use and 
                how to use them with getting bogged down and overcomplicating things as it's very each to fall down the "get it perfect first time" rabbit whole rather than the "get it working & upgrade later" one. 
                <br/><br/>
                So hopefully you'll see progress soon!
                😊
            </p>
    }
]

type BlogPosts = {
    date: string,
    post: JSX.Element
}[];

export default posts