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
}

export default AnnotatedLayout;