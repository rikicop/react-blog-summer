import { useParams } from "react-router";
import useFetch from './useFetch';

import {Container,Footer, Content, Navbar, 
    Sidebar,Titulo,Content3,Imagen,
    SocialMediaWrap,SocialIconLink, SocialIcons,
    LeftNavTitle, RightNavTitle} from './BlogDetElements';

import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa';

 const BlogDetails = () => {
     const {id} = useParams();
     const { data:blog , error, isPending} = useFetch('http://192.168.43.129:8000/api/'+ id)
     
    return (
        <div>
            {isPending && <div> Loading... </div>}
            {error && <div> {error} </div>}
            {blog && (
              <>
                 <Container>
                 <Navbar>
                   <LeftNavTitle>Blog </LeftNavTitle>
                   <RightNavTitle>Flecha </RightNavTitle>
                 </Navbar>
                   <Titulo> 
                     {blog.title}
                   </Titulo>
                   <Sidebar>{blog.title}</Sidebar>
                   <Content3>
                     <Imagen src={blog.foto} alt=""/>
                   </Content3>
                   
                   <Content dangerouslySetInnerHTML={{ __html: `${blog.description}` }} />
                    
                   <Footer>
                   <SocialMediaWrap>
                   <SocialIcons>
                       <SocialIconLink href="https://www.facebook.com/fernando.otaloraluna.1" target="_blank" aria-label="Facebook">
                         <FaFacebook />
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                         <FaInstagram />
                       </SocialIconLink>
                       <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                         <FaLinkedin />
                       </SocialIconLink>
                     </SocialIcons>
                     </SocialMediaWrap>
                   </Footer>
                 </Container>
                 </>
            )}
        </div>
    )
}

export default BlogDetails