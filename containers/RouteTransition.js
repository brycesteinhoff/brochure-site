import React from 'react';
import { RouteTransition as ReactRouterTransition } from 'react-router-transition';
import { spring } from 'react-motion';

const fadeConfig = { stiffness: 200, damping: 25 };
const slideConfig = { stiffness: 350, damping: 35 };

const transitionPreset = {
    atEnter: {
        opacity: 0,
        offset: -100
    },
    atLeave: {
        opacity: 1,
        offset: spring(100, slideConfig)
    },
    atActive: {
        opacity: spring(1, slideConfig),
        offset: spring(0, slideConfig)
    },
    mapStyles(styles) {
        return {
            opacity: styles.opacity,
            transform: `translateY(${styles.offset}%)`
        };
    }
};

const RouteTransition = (props) => (
    <ReactRouterTransition
        className="Page_wrapper"
        pathname={props.location.pathname}
        {...transitionPreset}
    >
        {props.children}
    </ReactRouterTransition>
);

export default RouteTransition;


/*
atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        */