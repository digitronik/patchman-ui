import {
    EmptyState,
    EmptyStateBody,
    EmptyStateIcon,
    EmptyStateVariant,
    Title
} from '@patternfly/react-core';
import SearchIcon from '@patternfly/react-icons/dist/js/icons/search-icon';
import React from 'react';
import { intl } from '../../Utilities/IntlProvider';
import messages from '../../Messages';

export const EmptyAdvisoryList = () => (
    <EmptyState variant={EmptyStateVariant.full}>
        <Title headingLevel="h5" size="lg">
            {intl.formatMessage(messages.statesNoMatchingAdvisories)}
        </Title>
        <EmptyStateBody>
            {intl.formatMessage(messages.textEmptyStateBody)}
        </EmptyStateBody>
    </EmptyState>
);

export const EmptyPackagesList = () => (
    <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={SearchIcon} />
        <Title headingLevel="h5" size="lg">
            {intl.formatMessage(messages.statesNoMatchingPackages)}
        </Title>
        <EmptyStateBody>
            {intl.formatMessage(messages.textEmptyStateBody)}
        </EmptyStateBody>
    </EmptyState>
);

export const EmptyCvesList = () => (
    <EmptyState variant={EmptyStateVariant.full}>
        <EmptyStateIcon icon={SearchIcon} />
        <Title headingLevel="h5" size="lg">
            {intl.formatMessage(messages.statesNoMatchingCve)}
        </Title>
        <EmptyStateBody>
            {intl.formatMessage(messages.textEmptyStateBody)}
        </EmptyStateBody>
    </EmptyState>
);
