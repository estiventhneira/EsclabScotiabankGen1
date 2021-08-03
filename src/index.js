import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import Welcome from './components/Welcome';
import RenderImage from './components/RenderImage';

const Index = () => {
  const [nombrevalor, setNombreValor] = useState(null);
  const [url, setUrl] = useState(null);

  return (
    <>
      <SearchBar setUrl={setUrl} />
      <Welcome nombre={nombrevalor} />
      <RenderImage url={url} />
    </>
  );
};

export default Index;
