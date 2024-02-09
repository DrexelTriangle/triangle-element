import './App.css'
import { Footer } from './components/Footer.tsx';
import { Header } from './components/Header.tsx';
import { HeaderFrontPage } from './components/HeaderFrontPage.tsx';
import { Features } from './components/Features.tsx'
import "../TriangleX/style.css"


// TASK -1: utilitiy function that calculates database stats
// TASK 0: grab all items, map to some generic object
// TASK 1: grab items by Subject (almost done)
// TASK 2: grab by ID
// TASK 3: grab verbose information for article (if needed)
// TASK 4*: date processor function
// TASK 5*: database switch
// TASK 6*: Time Functions
// TASK 7*: Ask Daniel if he can think of anything else 



const articleItem = (row) => ({
  title: row.headline,
  section: row.service[0].name,
  keywords: row.keywords,
  authors: row.by_line,
  created: row.firstcreated,
  body: row.body_html,
  published: row.firstpublished,
  slugline: row.slugline
});



const grabAll = async () => {
  const data = await fetch('./fake-backend.json').then(
    (response) => response.json()).then(
      function(json){return json._items;}
    );
  
    const articles = data.map(articleItem);
    return articles;
}

const grabBySection = async (sectionName: string) => {
  const data = await fetch('./fake-backend.json').then(
    (response) => response.json()).then(
      function(json){return json._items;}
    );
  
  const articles = data.map(articleItem).filter(
    function(item: typeof articleItem){
      if (item.section === sectionName){
        return item;
      }
    }
  );
    return articles;
}

const grabMainArticles  = async () => {
  // Grab News Article
  const data = await fetch('./fake-backend.json').then(
    (response) => response.json()).then(
      function(json){return json._items;}
    );
  
  const articles = data.map(articleItem);

  // Sort by Date, 
    return articles;
}




const test1 = await grabAll();
const test2 = await grabBySection('Opinion');
const test3 = await grabMainArticles();

console.log(test3);
  // TODO:
  // - Map to an object that holds the important info
  // - Figure out wtf 'verbose info' would include 
  









function App() {
  return ( <>
      <Header />
      <div className="max-w-[1280px] w-[90%] m-auto">
        <HeaderFrontPage />
        <Features />
      </div>
      <Footer/>
    </>);
}

export default App
