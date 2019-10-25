import React from 'react';
import { useHistory } from 'react-router-dom';
import { Page, Layout, Form, FormLayout, Button } from '@shopify/polaris';

import styles from './group-action.module.css';

export const GroupAction = () => {
  const history = useHistory();
  const handleSubmit = () => history.push('/challenge');

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <div className={styles.buttonWrapper}>
                <Button fullWidth={true} size="large" submit={true}>
                  Start a Team
                </Button>
                <Button fullWidth={true} size="large" submit={true}>
                  Join a Team
                </Button>
              </div>
            </FormLayout>
          </Form>
        </Layout.Section>
      </Layout>
    </Page>
  );
};
