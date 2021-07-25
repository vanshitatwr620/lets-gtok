import React from 'react';
import FeatureBox from './FeatureBox';
import featureImage from '../images/feature_1.png';
import featureImage1 from '../images/feature_2.png';
import featureImage2 from '../images/feature_3.png';

function Feature() {
    return (
    <div id="features">
        <div className="a-container">
            <FeatureBox image={featureImage} title="Share Feelings" description="Expressing our feelings allows us to get closer to our loved ones.

Sharing your feelings and experiences is liberating, and Lets Gtok provides you with a perfect platform to do so."/>
            <FeatureBox image={featureImage1} title="Trade Feelings" description="Sharing you feelings has never been so easier before. Express your feelings in a judgement free environment, where they are mattered. Sharing is liberating as Lets Gtok. Even anonymously!"/>
            
        </div>
    </div>
    );
}

export default Feature;