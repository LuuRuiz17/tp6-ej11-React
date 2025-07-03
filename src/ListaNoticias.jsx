import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {

    return (
        <div className="bg-danger p-3 mt-4 container row">
            {
                noticias.map((noticia) => (
                    <div key={noticia.article_id} className="col-md-4 mb-3 contenedor-card">
                        <Noticia noticia={noticia}></Noticia>
                    </div>
                ))
            }
        </div>
    );
};

export default ListaNoticias;