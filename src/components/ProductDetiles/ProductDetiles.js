import React from "react";
import styles from "./ProductDetiles.module.css";
import {VatText, PriceText} from '../../styled'
import { PageHeader, Tag, Button} from 'antd';
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";

const ProductDetiles = ({ current, addToCart }) => {
  return (
    <>
    <PageHeader
                 className="site-page-header"
                 onBack={() => window.history.back()}
                 title="Back"
                 subTitle="Mobile Detils"
                 tags={<Tag color="blue">info</Tag>}
                />
    <div className={styles.singleItem}>
      <img
        className={styles.singleItem__image}
        src={current.images}
        alt={current.title}
      />
      <div className={styles.singleItem__details}>
        <h2 className={styles.details__title}>{current.title}</h2>
        <p className={styles.details__description}>{current.description}</p>
        <PriceText> <small>SR</small>{current.price} </PriceText>
        <VatText>inclusive of VAT</VatText>
        <Button type="primary" onClick={() => addToCart(current.id)} block>
          Add to card
        </Button>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetiles);