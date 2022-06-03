import './header.css';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import { AppstoreOutlined, HomeOutlined, VideoCameraOutlined } from '@ant-design/icons';

export function header() {
    return (
        <header color>
            <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
                <Menu.Item key="mail" icon={<HomeOutlined />}>
                    <Link className="logo" to='/'> Prime Flix</Link>
                </Menu.Item>
                <Menu.SubMenu key="SubMenu" title="FIlmes" icon={<VideoCameraOutlined />}>
                    <Menu.Item key="two" icon={<AppstoreOutlined />}>
                        <Link className="favoritos" to='/favoritos'> Meus Filmes</Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>

        </header>



    )
}
export default header;