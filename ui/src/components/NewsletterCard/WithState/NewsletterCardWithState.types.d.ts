import React from 'react';
import NewsletterCardProps from '../Base/NewsletterCard.types';
export default interface NewsletterCardWithStateProps extends NewsletterCardProps {
    NewsletterCardComponent: React.ComponentType<NewsletterCardProps>;
}
