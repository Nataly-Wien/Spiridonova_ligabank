import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchCurrentCourse} from '../../store/api-actions';
import Header from '../header/header';
import Promo from '../promo/promo';
import Convert from '../convert/convert';
import History from '../history/history';
import Footer from '../footer/footer';

const MainPage = ({onLoadData}) => {
  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <div className="page">
      <Header />
      <main className="page-main">
        <Promo />
        <Convert />
        <History />
      </main>
      <Footer />
    </div>
  );
};

MainPage.propTypes = {
  onLoadData: PropTypes.func.isRequired,
};

// const mapStateToProps = ({currencyHave, currencyNeed}) => ({
//   currencyHave,
//   currencyNeed,
// });

const mapDispatchToProps = (dispatch) => ({
  onLoadData: () => dispatch(fetchCurrentCourse()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
export default connect(null, mapDispatchToProps)(MainPage);
