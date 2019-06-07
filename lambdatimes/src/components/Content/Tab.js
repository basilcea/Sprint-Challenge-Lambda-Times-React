import React from 'react';
import PropTypes from 'prop-types'
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let classNAme
      props.tab===props.selectedTab? classNAme = 'tab active-tab':'tab'
      
  return (
    <div
      className={classNAme}
      onClick={(tab) => {selectTabHandler(tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes =({
  tab:propTypes.shape({
    selectTabHandler:PropTypes.func,
    tab:PropTypes.string
  })

})

export default Tab;
