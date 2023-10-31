/*******************   
 Quote Array
 ******************/

let quotes = [
    {
        quote:'The unexamined life is not worth living.', source: 'Socrates', citation:'parade', year: 1674
    },
    {
        quote:'I like criticism. It makes you strong.', source: 'Lebron James', citation:'Basketball', year: 1984
    },
    {
        quote:'You never really learn much from hearing yourself speak.', source: 'George Clooney', citation:'Google', year: 1947
    },
    {
        quote:'Life is really simple, but men insist on making it complicated.', source: 'Confucius', citation:'The Art of War by Sun Tzu', year: 2023
    },
    {
        quote:'Life would be tragic if it werent funny.', source: 'Stephen Hawking', citation:'Some book IDK', year: 2019
    },
    {
        quote:'Never say cant', source: 'Blaine Ruttan', citation:'Keswick Christian School', year: 2023
    },
    {
        quote:'Zoo Wee Mama', source: 'Greg', citation:'Diary of A Wimpy Kid', year: 2012
    },
    {
        quote:'The best way to predict your future is to create it.', source: 'Abraham Lincoln', citation:'His Book', year: 1920
    },
    {
        quote:'Throughout life people will make you mad, disrespect you and treat you bad. Let God deal with the things they do, cause hate in your heart will consume you too.', source: 'Will Smith', citation:'Will Smith', year: 2018
    },
    {
        quote:'When it is obvious that goals cant be reached, dont adjust the goals, but adjust the action steps.', source: 'Confucius', citation:'The Art of War by Sun Tzu', year: 0
    },
    {
        quote:'You need to wake up', source: 'Anonymous', citation:'PSA', year: 'unknown'
    },
    {
        quote:'Youre only human. You live once and life is wonderful, so eat the damned red velvet cupcake.', source: 'Emma Stone', citation:'The Country of Turkey', year: 1940
    },
    {
        quote:'Lifes tough, but its tougher when youre stupid.', source: 'John Wayne', citation:'Cowboy Movie', year: 1950
    },
    {
        quote:'Happy is the man who can make a living by his hobby.', source: 'George Bernard Shaw', citation:'Medical Documents',year: 2020
    },
    {
        quote:'There are no regrets in life, just lessons.', source: 'Jennifer Aniston', citation:'Google', year: 2012
    },
    {
        quote:'Dont trust everything you see on the internet', source: 'Abraham Lincoln', citation:'Google', year: 2028
    },
    {
        quote:'Find people who will make you better.', source: 'Michelle Obama', citation:'Her Book I Think', year: 2015
    },
    {
        quote:'The way I see it, every life is a pile of good things and bad things. The good things dont always soften the bad things, but vice versa, the bad things dont always spoil the good things and make them unimportant.', source: 'The Doctor', citation:'Doctor Who', year: 2290
    },
    {
        quote:'Life is about making an impact, not making an income.', source: 'Kevin Kruse', citation:'Google', year: 2019
    },
    {
        quote:'I am the way, the truth, and the life. No one comes to the father except through me.', source: 'Jesus of Nazareth', citation:'The Bible', year: 33
    },
    {
        quote:'Skull Emoji 💀', source: 'Matt Rose', citation:'youtube', year: 2021
    },
];

/****************************
    getRandomQuote Function
 ***************************/

    function getRandomQuote () {
        let randomNum = Math.floor (Math.random()*quotes.length);
        let randomQuote = quotes[randomNum];
        return randomQuote;
    }

/****************************
    printQuote Function
 ***************************/

    function printQuote () {
        let randomQuote = getRandomQuote();
        let quoteBox = document.getElementById("quote-box");
        let html = `<p class="quote"> ${randomQuote.quote}</p>
                    <p class="source"> ${randomQuote.source}
                    <span class="citation"> ${randomQuote.citation}</span>`;
        if(randomQuote.year !='unknown'){
            html += `<span class="year"> ${randomQuote.year}</span>`;
        }
        html += `</p>`;
        quoteBox.innerHTML = html;
        return document.body.style.backgroundColor=getColor();
    }

/****************************
    Create Random Color Background on each click
 ***************************/

    function getColor(){
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);

        let rgbColor = `rgb(${r}, ${g}, ${b})`
        return (rgbColor);
    }

// Create Automatic timer for every 5 secs

let timer = setInterval(printQuote, 5000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);