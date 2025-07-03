import Noticia from "./Noticia";

const ListaNoticias = ({ noticia }) => {

    {
        // console.log(noticia);

    }
    return (
        <div className="bg-danger p-3 mt-4 container">
            <Noticia noticia={noticia}></Noticia>
        </div>
    );
};

export default ListaNoticias;