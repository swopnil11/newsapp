import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Fifa extends Overmars ban to global game",
            "description": "Ex-Netherlands winger Marc Overmars' suspension from holding a post in Dutch football is extended to a global ban by Fifa.",
            "url": "http://www.bbc.co.uk/sport/football/67930766",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/F772/production/_132264336_gettyimages-1767720004.jpg",
            "publishedAt": "2024-01-10T15:07:24.311957Z",
            "content": "Overmars played for Ajax, Arsenal and Barcelona during his playing career\r\nEx-Netherlands winger Marc Overmars' suspension from holding a post in Dutch football has been extended to a global ban by w… [+1227 chars]"
        },
        {
            "source": {
                "id": "four-four-two",
                "name": "FourFourTwo"
            },
            "author": "Ben Fleming",
            "title": "Premier League break explained: Why is there a reduced football schedule this weekend?",
            "description": "The Premier League winter break is back to allow players a well-deserved break following a hectic Christmas schedule",
            "url": "https://www.fourfourtwo.com/news/premier-league-break-explained-why-is-there-a-reduced-football-schedule-this-weekend",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/wP8sTujd6AtqfyP9DjQZLS-1200-80.jpg",
            "publishedAt": "2024-01-10T12:49:06Z",
            "content": "As the Premier League's hectic festive schedule comes to an end, players and teams can now enjoy a well-deserved break. \r\nFirst introduced in the 2019-20 season, the Premier League's winter break was… [+2311 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "USA TODAY",
            "title": "See how every college football coach in US LBM Coaches Poll voted in final Top 25 rankings",
            "description": "The final US LBM Coaches Poll of the college football season is out and there were changes behind No. 1 Michigan. See how every coach voted.",
            "url": "https://www.usatoday.com/story/sports/ncaaf/2024/01/10/college-football-rankings-coaches-poll-ballots/72119968007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/12/07/USAT/71839591007-usatsi-22017179.jpg?crop=3835,2157,x172,y162&width=3200&height=1800&format=pjpg&auto=webp",
            "publishedAt": "2024-01-10T11:24:12+00:00",
            "content": "The college football season is complete and Michigan has been crowned national champions. Now the coaches get their say in where the rest of the teams will be ranked in the final US LBM Coaches Poll … [+30957 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "David Kenyon",
            "title": "Unique Stats from the 2023 College Football Regular Season",
            "description": "Numbers are an integral part of college football. Whether you're previewing games, ranking teams or picking an award winner, statistics help shape the story.…",
            "url": "https://bleacherreport.com/articles/10100739-unique-stats-from-the-2023-college-football-regular-season",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_2000,q_95/v1702319871/sdx1wjlqkcqz3anqfabp.jpg",
            "publishedAt": "2023-12-12T12:00:00Z",
            "content": "Zach Bolinger/Icon Sportswire via Getty Images\r\nSpeaking of Iowa...\r\nWhat makes the Hawkeyes' stellar defensive season even more impressive is how much the team desperately needed it.\r\nAmong the many… [+711 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "161385360554578",
            "title": "Rice rescues Arsenal, Arteta evades Raya question, more Premier League build-up",
            "description": "talkSPORT.com brings you all the latest news, views and gossip from the world of football. Today's headlines: Mikel Arteta dodges David Raya question after goalkeeper's errors Declan Ri…",
            "url": "https://talksport.com/football/1667216/football-news-live-arsenal-mikel-arteta-david-raya-premier-league/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/jw-TALKSPORT-BLOG-06-12.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-12-06T09:06:42Z",
            "content": "Mikel Arteta didn't provide a straight answer when asked about David Raya's struggles during Arsenal's win at Luton.\r\nArsenal claimed a dramatic last-gasp win at Kenilworth Road with Declan Rice's st… [+1106 chars]"
        },
        {
            "source": {
                "id": "talksport",
                "name": "TalkSport"
            },
            "author": "Josh Fordham",
            "title": "Tottenham fans feared relegation without Harry Kane but Ange Postecoglou has got them scoring more...",
            "description": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you can’t blame them. Not only was he their record goalscorer, but also one of the best strikers in world football seaso…",
            "url": "https://talksport.com/football/1666888/tottenham-goals-harry-kane-ange-postecoglou/",
            "urlToImage": "https://talksport.com/wp-content/uploads/sites/5/2023/12/Kane_Postecoglou-Comp.png?strip=all&quality=100&w=1500&h=1000&crop=1",
            "publishedAt": "2023-12-05T17:57:19Z",
            "content": "Tottenham losing Harry Kane in the summer sent the fans into crisis mode and you cant blame them.\r\nNot only was he their record goalscorer, but also one of the best strikers in world football season … [+2220 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
            "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
            "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
            "publishedAt": "2020-04-27T07:20:43Z",
            "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"
        }
    ]

    constructor(){
        super();
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=6b441c3a187649fe9aab9b33a8d7eb74";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className="container my-3">
                <h2>NewsCatcher - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        </div>
                    })}    
                </div>
            </div>
        )
    }
}

export default News