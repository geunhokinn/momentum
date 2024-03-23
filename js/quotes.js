const quotes = [
    {
        quote: "성공하기 전에는 항상 그것이 불가능한 것처럼 보이기 마련이다.",
        author: "Nelson Mandela",
    },
    {
        quote: "뛰어남이란 항상 더 잘 하려고 노력하는 데에서 나온 꾸준한 결과이다.",
        author: "Pat Riley",
    },
    {
        quote: "긴 인내 후의 실패는 충분히 노력하지 않은 것보다 훨씬 더 위대하다.",
        author: "George Eliot",
    },
    {
        quote: "성공의 이전에는 노력이 있음을 항상 기억하라. 심지어 사전에서도 그렇다.",
        author: "Sarah Ban Breathnach",
    },
    {
        quote: "당신의 최대 기적에 가장 가까울 때, 당신은 가장 최대 역경을 마주하게 될 것이다.",
        author: "Shannon L. Alder",
    },
    {
        quote: "천리길도 한 걸음부터.",
        author: "Lao Tzu",
    },
    {
        quote: "나는 실패한 적이 없다. 그저 작동하지 않는 10,000개의 방법들을 발견했을 뿐이다.",
        author: "Thomas A. Edison",
    },
    {
        quote: "질문은 누가 나를 허락하는가가 아니라, 누가 나를 멈추게 할 것인가이다.",
        author: "Ayn Rand",
    },
    {
        quote: "이 세상에서 당신은 오직 당신이 잡으려고 손을 뻗은 것만을 얻는다.",
        author: "Giovanni Boccaccio",
    },
    {
        quote: "모든 스트라이크는 나를 다음 홈런에 한층 더 가깝게 해준다.",
        author: "Babe Ruth",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuotes = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;