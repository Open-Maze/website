import React, { useEffect, useState } from 'react';
import './shared.css';

// External
import axios from 'axios';

// Blocks
import Header from '../blocks/Header/Header';
import Product from '../blocks/Product/Product';
import CoreValues from '../blocks/CoreValues/CoreValues';
import CTA from '../blocks/CTA/CTA';

// Components
import CardImage from '../components/CardImage/CardImage';
import CardIcon from '../components/CardIcon/CardIcon';

const Products = () => {
  const [info, setInfo] = useState({});
  const [products, setProducts] = useState({});
  const [productsCollections, setProductsCollection] = useState([]);
  const [coreValues, setCoreValues] = useState([]);

  useEffect(() => {
    axios.get('https://api.openmaze.io/info').then((response) => {
      setInfo(response.data);
    });
    axios.get('https://api.openmaze.io/products').then((response) => {
      setProducts(response.data);
    });
    axios.get('https://api.openmaze.io/products-collections').then((response) => {
      const sortedArray = response.data.sort((a, b) => a.order - b.order);
      setProductsCollection(sortedArray);
    });
    axios.get('https://api.openmaze.io/core-values').then((response) => {
      const sortedArray = response.data.sort((a, b) => a.order - b.order);
      setCoreValues(sortedArray);
    });
  }, []);

  return (
    <div className="page products">
      <Header
        size={products.header?.size}
        title={products.header?.title}
        text={products.header?.text}
        buttonLink={products.header?.button1_link}
        buttonLabel={products.header?.button1_label}
        button2Link={products.header?.button2_link}
        button2Label={products.header?.button2_label}
        image={info.api_base + products.header?.image?.url}
        arrow={products.header?.arrow}
      />
      <Product>
        {productsCollections?.map((product) => (
          <CardImage
            key={product.id}
            imagePosition={product.image_position}
            title={product.title}
            description={product.text}
            image={info.api_base + product.image?.url}
            imgBackground={product.color_background}
            buttonLink={product.button_link}
            buttonLabel={product.button_text}
          />
        ))}
      </Product>
      <CoreValues title={products.core_values?.title} subtitle={products.core_values?.subtitle}>
        {coreValues?.map((value) => (
          <CardIcon
            key={value.id}
            type={value.type}
            iconFront={`fa-solid fa-${value.icon}`}
            iconBack={`fa-solid fa-${value.background_icon}`}
            title={value.title}
            text={value.text}
            className={value.column_width === 'half' ? 'col-span-6' : 'col-span-4'}
          />
        ))}
      </CoreValues>
      <CTA
        title={products.cta?.title}
        subtitle={products.cta?.subtitle}
        image={info.api_base + products.cta?.image?.url}
        buttonLink={products.cta?.button_link}
        buttonLabel={products.cta?.button_text}
        email={info.email}
        linkedin={info.linkedin}
      />
    </div>
  );
};

export default Products;
