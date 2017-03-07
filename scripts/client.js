var phirePhiterApp = angular.module('PhirePhiterApp', []);
phirePhiterApp.controller('PhirePhiterController', function() {
    console.log('PhirePhiter controller loaded');
    var self = this; // holds the value of this
    self.people = [{
            "firstName": "Arrielle",
            "lastName": "Kooiman",
            "git_username": "Arrielle",
            "shoutout": "Y'all have been PHInomenal",
            "imageURL": "https://avatars2.githubusercontent.com/u/23461237?v=3&s=460",
            "githuburl": "https://github.com/Arrielle"
        },

        {
            "firstName": "Melissa",
            "lastName": "Hare",
            "git_username": "Melissa-Elizabeth",
            "shoutout": "Hi",
            "imageURL": "https://avatars1.githubusercontent.com/u/23161008?v=3&s=460",
            "githuburl": "https://github.com/Melissa-Elizabeth"
        },
        {
            "firstName": "Chad",
            "lastName": "Sundberg",
            "git_username": "chadsundberg",
            "shoutout": "Celina!!  She taught me how to use two fingers to scroll in my open windows!  Oh, and I'd like to thank var taco!",
            "imageURL": "https://avatars3.githubusercontent.com/u/23482083?v=3&s=460",
            "githuburl": "https://github.com/chadsundberg"
        },
        {
            "firstName": "Christine",
            "lastName": "Pogatchnik",
            "git_username": "kikipogo",
            "shoutout": "Everyone",
            "imageURL": "https://avatars0.githubusercontent.com/u/16141654?v=3&s=460",
            "githuburl": "https://github.com/kikipogo"
        },
        {
            "firstName": "Thomas",
            "lastName": "Johander",
            "git_username": "lopan455",
            "shoutout": "Yo! Thanks for that!",
            "imageURL": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA0QAAAAJGM3YWZjMzZjLTQ4YTYtNDM4My1iMzc0LTYxYmRmZDNlMzQ0YQ.jpg",
            "githuburl": "https://github.com/lopan455"
        },
        {
            "firstName": "Edmund",
            "lastName": "Wippler",
            "git_username": "edwippler",
            "shoutout": "Sup?",
            "imageURL": "https://media.licdn.com/media/AAEAAQAAAAAAAAeoAAAAJGM5NWY3NmYzLWNiZTQtNDRmYy05YTNmLTQxZDJkOTk0M2QzMA.jpg",
            "githuburl": "https://github.com/edwippler"
        },
        {
            "nafirstNameme": "Jonny",
            "lastName": "Holupchinski",
            "git_username": "jonholup",
            "shoutout": "Yo!",
            "imageURL": "http://animal-dream.com/data_images/tiger/tiger8.jpg",
            "githuburl": "https://github.com/jonholup"
        },
        {
            "firstName": "Catherine",
            "lastName": "Jarocki",
            "git_username": "cjaro",
            "shoutout": "Thank you to the internet of resources!",
            "imageURL": "https://avatars1.githubusercontent.com/u/19612689?v=3&s=460",
            "githuburl": "https://github.com/cjaro"

        },
        {
            "firstName": "Kris",
            "lastName": "Jensen",
            "git_username": "kristinejensen",
            "shoutout": "Thank you to Luke, Kris, and Chris for being great instructors!",
            "imageURL": "https://media.licdn.com/media/p/2/005/058/1c9/36c8207.jpg",
            "githuburl": "https://github.com/kristinejensen"
        },
        {
            "firstName": "Paul",
            "lastName": "Dunkirk",
            "git_username": "pauldunkirk",
            "shoutout": "Phi peops rock!",
            "imageURL": "https://avatars1.githubusercontent.com/u/19807093?v=3&s=460",
            "githuburl": "https://github.com/pauldunkirk"
        },
        {
            "firstName": "Celina",
            "lastName": "Peterson",
            "git_username": "celina",
            "shoutout": "Peace out!",
            "imageURL": "https://avatars1.githubusercontent.com/u/58040?v=3&s=460",
            "githuburl": "https://github.com/celina"
        },
        {
            "firstName": "Chris",
            "lastName": "Stanton",
            "git_username": "chris-stanton",
            "shoutout": "Peace",
            "imageURL": "http://tcbmag.com/getattachment/037be106-8f16-4dff-bc40-81462e91d177",
            "githuburl": "https://github.com/chris-stanton"
        },
        {
            "firstName": "Philip",
            "lastName": "Curtis",
            "git_username": "PCSailor",
            "shoutout": "Thanks to Luke and Kris, and Chris, Scott, & Fred",
            "imageURL": "https://avatars2.githubusercontent.com/u/22984498?v=3&s=460",
            "githuburl": "https://github.com/PCSailor"
        },
        {
            "firstName": "Sam",
            "lastName": "Velie",
            "git_username": "samvelie",
            "shoutout": "Love y'all ",
            "imageURL": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAfwAAAAJGQxMjcyNDcxLTJkYzktNDFjMC1hYzQ1LTBiMWU3NmNmYjRhOA.jpg",
            "githuburl": "https://github.com/samvelie"
        },
        {
            "firstName": "Paige",
            "lastName": "Bystrom",
            "git_username": "Radmint",
            "shoutout": "Thanks to Phi cohort for being awesome, positive people! ",
            "imageURL": "https://avatars3.githubusercontent.com/u/23347804?v=3&s=460",
            "githuburl": "https://github.com/Radmint"
        },
        {
            "firstName": "Jeremy",
            "lastName": "Leif",
            "git_username": "JL-golf14",
            "shoutout": "break down the Phirewalls of doubt!!!",
            "imageURL": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAdZAAAAJGQ1NmE1ODdhLTRhZWQtNGM3MS05NzViLTljODdhNDZmNGFmNA.jpg",
            "githuburl": "https://github.com/JL-golf14"
        },
        {
            "firstName": "Kris",
            "lastName": "Szafranski",
            "git_username": "kdszafranski",
            "shoutout": "Thank you to Phi for your open, warm, and thoughtful speeches. You rekindle my faith in humanity!",
            "imageURL": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAANLAAAAJGVmOTljZDA5LTk0NWUtNDlmOC1hNzg0LWViOWU4NjZjMTc3Ng.jpg",
            "githuburl": "https://github.com/kdszafranski"
        },
        {
            "firstName": "Luke",
            "lastName": "Schlangen",
            "git_username": "lukeschlangen",
            "shoutout": "Thanks for being awesome during the angular lecture today.",
            "imageURL": "https://media.licdn.com/media/AAEAAQAAAAAAAAdiAAAAJDk0MWZkMWNlLTJiNTktNGMzYi1hYjk3LTUzNzJkNWJjMTRkYg.jpg",
            "githuburl": "https://github.com/lukeschlangen"
        }
    ];

    self.newPerson = {};

    self.createPerson = function() {
        console.log(self.newPerson);
        self.people.push(angular.copy(self.newPerson));
    }; //end createPerson function

}); // end controller function
