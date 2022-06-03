import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../services/api'
import { Card, Col, Row } from 'antd';
import { Image } from 'antd';
import { Button } from 'antd';


function Filme() {
    const { id } = useParams();
    const [filme, setFilme] = useState({});

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: "28fc232cc001c31e8a031f419d0a14ca",
                    language: "pt-BR",
                }
            })
                .then((response) => {
                    console.log(response.data)
                    setFilme(response.data)
                })
                .catch(() => {
                    console.log("Filme não encontrado")
                })
        }
        loadFilme()
    })
    return (
        <div>

            <Row>
                <Col span={6} offset={8} className="detail_film">
                    <Image
                        src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                    />
                </Col>
                <Col span={18} offset={3} className="detail_film">
                    <Card type="inner" title={filme.title} extra={<a href="#">{filme.release_date}</a>}>
                        {filme.overview}
                    </Card>
                    <Button className="detail_film" type="primary">Salvar Filme</Button>
                    <Button className="detail_film">Ver Trailler</Button>
                </Col>
                
            </Row>

        </div>
    )
}
export default Filme;