import Topic from "../models/topic";
import Article from "../models/article";

export const TOPICS = [
  new Topic("t1", "Psychology", "#A1CAFA"),
  new Topic("t2", "Sociology", "#D9B3FA"),
  new Topic("t3", "Chemistry", "#E1FFA1"),
  new Topic("t4", "Video Games", "#FFCC75"),
  new Topic("t5", "Engineering", "#FFDCA1"),
  new Topic("t6", "Skydiving", "#FF8475"),
  new Topic("t7", "Knee Pain", "#81F3F5"),
  new Topic("t8", "Physics", "#76AD93"),
  new Topic("t9", "Emotions", "#D5D8DB"),
  new Topic("t10", "Technology", "#FAA2E3")
];

export const ARTICLES = [
  new Article(
    "A Study of the Effects of Sunlight on Parachute Degradation",
    "a1",
    ["t6", "t8"],
    "Bob Freefall, Jane NoWings",
    "Physics of Flight",
    "June 16, 1999"
  ),
  new Article(
    "Video Games and Depression, A Clinical Study",
    "a2",
    ["t1", "t4"],
    "Sue Memoire",
    "The Journal of Psychology",
    "December 12, 2015"
  ),
  new Article(
    "Rainy Days and Happiness",
    "a3",
    ["t1"],
    "John Brain, Sally Greymatters",
    "Modern Mind",
    "May 4, 2005"
  ),
  new Article(
    "Eat Your Cheese?",
    "a4",
    ["t7"],
    "Bill Robinson",
    "Health and You",
    "July 7, 2017"
  ),
  new Article(
    "Dogs and How They Make Us Better Humans",
    "a5",
    ["t2"],
    "Frank Helps",
    "Modern Sociology",
    "June 15, 1975"
  ),
  new Article(
    "How Cats Learned to Write Code",
    "a6",
    ["t4", "t10"],
    "Jessica Wins",
    "Journal of Computer Science",
    "October 1, 2000"
  ),
  new Article(
    "Breaks the Game of Life",
    "a7",
    ["t4", "t10"],
    "Sam Breaks-Computers, Jack Speedy, Betty Brilliant",
    "Tech Monthly",
    "January 2, 2010"
  ),
  new Article(
    "Breaks the World",
    "a8",
    ["t4", "t10"],
    "Sam Breaks-Computers",
    "Hack the Planet",
    "March 15, 2000"
  ),
  new Article(
    "The Effects of Acetic Acid on Plant Matter, Good for Your Gut?",
    "a9",
    ["t3", "t7"],
    "Balton Rown, Dark Macascos",
    "Food Science",
    "February 13, 1985"
  ),
  new Article(
    "Breaks the His Computer-Driven Bicycle",
    "a10",
    ["t4", "t10"],
    "Sam Breaks-Computers, Jack Speedy, Betty Brilliant",
    "Tech Monthly",
    "August 14, 2004"
  ),
  new Article(
    "The Effect of Clowns on Technology",
    "a11",
    ["t4", "t10"],
    "Sam Breaks-Computers, Jack Speedy, Betty Brilliant",
    "Tech Monthly",
    "November 2, 2007"
  ),
  new Article(
    "A Study in Pink",
    "a12",
    ["t2"],
    "Watson HelpsSherlock",
    "Modern Sociology",
    "April 6, 1980"
  ),
  new Article(
    "Why Webpack Hurts So Good",
    "a13",
    ["t4", "t10"],
    "Jessica Wins",
    "Journal of Computer Science",
    "September 1, 2018"
  ),
  new Article(
    "Why Does Daily Walking Benefit You",
    "a14",
    ["t7, t9"],
    "Bill Robinson, Henry Smith",
    "Health and You",
    "December 13, 1999"
  ),
  new Article(
    "Children and the Happiness Effect",
    "a15",
    ["t2"],
    "Frank Helps",
    "Modern Sociology",
    "October 10, 1972"
  )
];

//title, id, topicId, author, journal, publishDate
