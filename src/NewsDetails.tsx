import React, { FC, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
interface NewsDetailsProps {

}
const NewsDetails: FC<NewsDetailsProps> = () => {


  const [headlinesData, setHeadlinesData] = useState<any>([]);
  const API_KEY = 'ffe0a7e7acc04c41b68d6fb6bbba8a1e';

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=ffe0a7e7acc04c41b68d6fb6bbba8a1e'
    );
    const data = await response.json();
    setHeadlinesData(data.articles);

  }

  return (
    <>
    <div>News Details</div>
     {headlinesData.map( (article: any) => {
        return (<><Card key={article.source.id}
          style={{
          
            borderColor: '#333',
            margin: '2rem'
          }}
          >
            <CardBody
            
            >
              <CardTitle tag="h5">
                {article?.title}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
              { article.description}
              </CardSubtitle>
              <CardText 
              className="text-left">
                {article.content}
              </CardText>
            </CardBody>
          </Card></>)
     })
     }
    </>
  );
};

export default NewsDetails;