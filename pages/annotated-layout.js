import {
  Card,
  Layout,
  Page,
  Button,
  Form,
  FormLayout,
  Stack,
  TextField,
  SettingToggle,
  TextStyle,
} from '@shopify/polaris';
import axios from 'axios';

class AnnotatedLayout extends React.Component {
  state = {
    discount: '16%',
    enabled: false,
  };

  render() {
    const { discount, enabled } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabed' : 'disabled';

    return (
      <Page>
        <Layout>
          <Layout.AnnotatedSection
            title="Default discount"
            description="Add a product to Sample App, it will automaticallybe discounted."
            >
              <Card sectioned>
                <Form onSubmit={this.handleSubmit}>
                  <FormLayout>
                    <TextField value={discount} onChange={this.handleChange('discount')} label="Discount percentage" type="discount"/>
                    <Stack sistribution="trailing">
                      <Button primary submit>
                        Save
                      </Button>
                    </Stack>
                  </FormLayout>
                </Form>
              </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection title="Price updates" description="Temporarily disable all Sample App price updates">
              <SettingToggle action={{
                content: contentStatus,
                onAction: this.handleToggle,
              }}>
                This seeting is{'  '}
                <TextStyle variation='strong'>{textStatus}</TextStyle>
              </SettingToggle>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection title="send message" description="this button could send a line message">
              <SettingToggle action={{
                content: 'send message',
                onAction: this.handleClickOnSendMessageButton,
              }}>
                This seeting is{'  '}
                <TextStyle variation='strong'>send a message</TextStyle>
              </SettingToggle>
            </Layout.AnnotatedSection>
        </Layout>
      </Page>
    );
  }

  handleSubmit = () => {
    this.setState({
      discount: this.state.discount,
    });
    console.log('submission', this.state);
  }

  handleChange = (field) => {
    return (value) => this.setState({ [field]:value });
  }

  handleToggle = () => {
    this.setState(( {enabled} ) => {
      return { enabled: !enabled };
    });
    // this.setState({
    //   enabled: !this.state.enabled
    // });
  };

  handleClickOnSendMessageButton = () => {
    const request = axios.create({
      baseURL: 'https://facb59bc.ngrok.io/api/v1'
    })
    request.get('/tickets/3d4f8fd9-0e05-44d7-a78d-2c63cd6ea644', {
      headers: {
        "Accept": "application/json",
        "X-QT-VERSION": "20190831",
        "Content-Type": "application/json",
        "Authorization": "Bearer live_sk_KYpVrI7HQMxFPVE4Y1zE1FiXEgFT6wQW8DoELv1445plSeenkTzrqx0PrvkzvF0W"
      }
    })
    .then(res => {
      console.log(res.data);
    })
    // const request = axios.create({
    //   baseURL: 'https://pwr2zeox06.execute-api.ap-northeast-1.amazonaws.com/test'
    // })
    // request.get('/get-api-test')
    // .then(res => {
    //   console.log(res.data);
    // })
  }
}

export default AnnotatedLayout;