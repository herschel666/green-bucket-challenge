import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Page,
  Layout,
  Form,
  FormLayout,
  TextField,
  Button,
} from '@shopify/polaris';

export const Login = () => {
  const history = useHistory();
  const handleSubmit = () => history.push('/group-action');

  return (
    <Page title="Green Bucket Challenge" subtitle="Login">
      <Layout>
        <Layout.Section>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField label="Username" onChange={() => {}} />
              <TextField type="password" label="Password" onChange={() => {}} />
              <Button submit={true}>Submit</Button>
            </FormLayout>
          </Form>
        </Layout.Section>
      </Layout>
    </Page>
  );
};
