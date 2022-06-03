import { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css'
import { Button } from 'antd'
import { Card, Col, Row } from 'antd';


function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                    page: 1,
                }
            })
            //console.log(response.data.results.slice(0,10))
            setFilmes(response.data.results.slice(0, 20))
        }
        loadFilmes();

    })

    return (
        <div>

            <div>
                <Card >
                    <Row gutter={16}>
                        {filmes.map((filme) => {
                            return (

                                <Col span={4} >
                                    <Card key={filme.id}
                                        style={{ marginTop: 16 }}
                                        type="inner"
                                        title={filme.title}
                                        cover={<img alt="example" src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} />}
                                    >
                                        <Link className="test" to={`/filme/${filme.id}`}>Saiba Mais</Link>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Card>
            </div>
        </div>
    )
}
export default Home;