import React, { useState, useEffect, useRef } from 'react';
const CuisinePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [initialLoad, setInitialLoad] = useState(true);
   const descriptionRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'j1.jpg',
    'j2.jpg',
  ];
  useEffect(() => {
    // Lorsque le composant est monté, on définit la catégorie sélectionnée sur null pour afficher uniquement les images des chefs
    setSelectedCategory(null);
    // On met à jour l'état initialLoad à false pour que la page ne se recharge qu'une seule fois lors du montage
    setInitialLoad(false);
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % images.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
    <img
    src={images[currentImageIndex]}
    alt="Image"
    style={{ width: '100%', height: '700px' }}
  /> 
    <div className="container">
      <h1 className="text-center mb-5">Atelier Cuisineeeeeee</h1>
      <div className="row justify-content-center">
        <div className="col-md-5 mb-4" onClick={() => handleCategoryChange('patisserie')}>
          <img
            src="chefpatessrie.jpg"
            alt="Patisserie"
            className="card-img-top"
            style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
          />
          <h2 className="text-center mb-5">Pâtisserie</h2>
        </div>
        <div className="col-md-5 mb-4" onClick={() => handleCategoryChange('cuisine')}>
          <img
            src="chefcuisine.jpg"
            alt="Cuisine"
            className="card-img-top"
            style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
          />
          <h2 className="text-center mb-5">Cuisine marocain et international</h2>
        </div>
      </div>

      {!initialLoad && selectedCategory === 'patisserie' && (
        <>
         <div className="row justify-content-center">
       <h2 className="text-center mb-5">-PÂTISSIE-</h2>
 
       <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="pic2.png"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">Macarons</h2>
             <p> Des petits gâteaux moelleux et fondants composés de coques en meringue et de ganache.</p>
             </div> 
             
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="pic9.png"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 /> 
                 <h2 className="text-center mb-5">La Dacquoise</h2>
                 <p>  Il est composé de couches de meringue légère et aérienne, intercalées de crème fouettée et de fruits frais. La meringue peut être parfumée aux noix, au café ou au chocolat, et les fruits peuvent varier des baies aux fruits tropicaux. Le gâteau est ensuite saupoudré de sucre glace pour une touche finale d'élégance.</p>
             </div> 
            
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="pic4.jpg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">Forêt Noire</h2>
                 <p> Un dessert composé de génoise, de crème Chantilly, de griottes et de kirsch.</p>
             </div> 
             
 
         </div>
       </div>
       <div className="row justify-content-center">
 
       <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="pic5.png"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">La galette des rois </h2>
                  <p> 
La galette des rois est une tarte feuilletée ronde garnie de frangipane, une crème d'amande. Il est traditionnellement servi le jour de l'Épiphanie, qui est le 6 janvier. La galette est généralement décorée d'une couronne en papier et contient une fève, qui est un petit charme ou une figurine. La personne qui trouve la fève est censée avoir de la chance pour l'année à venir.  </p>             
</div> 
             
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="pic8.png"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 /> 
                 <h2 className="text-center mb-5">Le Gâteau Opéra</h2>
                 <p>L'entremets Opéra est un dessert français multicouche, considéré comme un classique de la pâtisserie. Son design élégant et épuré, ainsi que la combinaison sophistiquée de saveurs et de textures, en font un gâteau prisé pour les occasions spéciales. </p>
            </div> 
            
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="pic7.png"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5"> Le gâteau moka</h2>
                <p>  Le gâteau moka est un gâteau au chocolat et au café. Il est généralement composé de couches de gâteau au chocolat et de crème au beurre au café. Le gâteau est souvent décoré de glaçage au chocolat ou de ganache. </p>             
</div> 
             
 
         </div>
       </div>
       <div className="row justify-content-center">
       <h2 className="text-center mb-5">-Boisson-</h2>
 
       <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="b2.jpg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">Jus D'avocat royel</h2>
             <p> Le jus Jus D'avocat royel est une boisson marocaine populaire à base de lait d'amande, d'avocat et de dattes. Il est souvent servi comme petit-déjeuner ou comme collation saine. Le jus Jus D'avocat royel est riche en nutriments, notamment en fibres, en vitamines et en minéraux. Il est également une bonne source de protéines et de graisses saines.</p>
             </div> 
             
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="b1.jpg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 /> 
                 <h2 className="text-center mb-5">Mojito</h2>
             <p> Le mojito est un cocktail cubain à base de rhum, de menthe fraîche, de sucre, de jus de citron vert et d'eau gazeuse. C'est une boisson rafraîchissante et populaire, parfaite pour une journée chaude.</p>
             </div> 
            
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="b3.png"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">Jus Royal</h2>
                 <p>Le jus Royal est une boisson marocaine populaire à base de jus d'orange, de jus de citron et de grenadine. C'est une boisson rafraîchissante et délicieuse, parfaite pour toute occasion.</p>
             </div> 
             
 
         </div>
       </div>
       
        </>
      )}

      {!initialLoad && selectedCategory === 'cuisine' && (
       <>
       <div className="row justify-content-center">
       <h2 className="text-center mb-5">- Cuisine marocain -</h2>
 
       <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="rfissa.jpg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">Rfissa</h2>
             <p> La Rfissa est un plat marocain traditionnel à base de poulet, de fèves sèches, d'amandes et d'épices. C'est un plat consistant et savoureux, souvent préparé pour des occasions spéciales.</p>
             </div> 
             
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="logocs.jpg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 /> 
                 <h2 className="text-center mb-5">Pastilla</h2>
             <p> La Pastilla est un plat salé feuilleté marocain traditionnel, généralement composé de viande de pigeon ou de poulet, d'amandes, d'oeufs et d'épices. C'est un plat souvent servi lors d'occasions spéciales comme les mariages et les fêtes religieuses.</p>
             </div> 
            
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="tajine.jpeg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">Tajine</h2>
                 <p> Le Tajine est un plat mijoté marocain traditionnel qui tire son nom du plat en terre cuite dans lequel il est cuit. Le tajine est généralement composé de viande, de légumes et de fruits secs, et est cuit lentement à feu doux.</p>
             </div> 
             
 
         </div>
       </div>
       <div className="row justify-content-center">
       <h2 className="text-center mb-5">-Salade-</h2>
 
       <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="s2.jpeg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">Salade Niçoise</h2>
                 <p>La salade niçoise est un plat français classique composé de laitue, de tomates, d'œufs durs, d'olives, de thon, d'anchois et de vinaigrette. C'est un plat simple et savoureux qui est parfait pour un repas d'été. </p>
             </div> 
             
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="s1.jpeg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 /> 
                 <h2 className="text-center mb-5">Salade Ibli</h2>
             <p>La salade ibli est un plat marocain traditionnel composé de tomates, de concombres, d'oignons, de poivrons verts et d'une vinaigrette épicée. C'est un plat simple et rafraîchissant qui est parfait pour un repas d'été.</p>
             </div> 
            
 
         </div>
         <div className="col-md-4 mb-4">
            <div className="card">
               <img
                   src="s3.jpg"
                   alt="Couture"
                   className="card-img-top"
                   style={{ width: '100%', height: '500px', borderRadius: '7px', boxShadow: '0px 5px 12px black' }}
                 />
                 <h2 className="text-center mb-5">Salade Royale</h2>
                 <p> La salade royale marocaine est un plat magnifique et coloré. La laitue romaine, le concombre, les tomates et le poivron rouge apportent une variété de couleurs et de textures. Les olives noires et le fromage feta ajoutent une touche de saveur salée, tandis que le persil et la menthe fraîche apportent une touche de fraîcheur. La vinaigrette au citron et à l'huile d'olive complète le tout avec une touche d'acidité.</p>
             </div> 
             
 
         </div>
       </div>
       </>
      )}
    </div>
    </>
  );
};

export default CuisinePage;
