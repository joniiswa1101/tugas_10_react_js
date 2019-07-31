import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import { Flag, Grid, Input, Icon, Image, Container, Divider, Label, Button } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Grid container columns={4}>
          <Grid.Column>
            <Flag name="id" />
            <Icon name="angle left" />
            <Icon name="angle right" />
          </Grid.Column>

          <Grid.Column>
              <Input type="text" style={{ width: "500px" }} placeholder="Search" icon={<Icon name="star"/>}/>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/patrick.png"
              size="mini"
              verticalAlign="middle"
              circular
            />
            <span> </span><span>Patrick</span>
          </Grid.Column>
        </Grid>

        <Divider horizontal>Selamat Datang !!!!</Divider>
        <Grid container columns={4}>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Label as='a' color='teal' tag>Sport</Label>
          </Grid.Column>
        </Grid>

        <Container textAlign="center">
          <p>
          Ducati tengah menunggu sidang Pengadilan Banding FIM tentang komponen aerodinamis. Andai gugatan para rivalnya diterima, akankah Ducati akan melanjutkan ke CAS (Pengadilan Arbitrase Olahraga)? Suzuki, Honda, KTM, dan Aprilia memprotes penggunaan komponen aero di motor Desmosedici Andrea Dovizioso dan Danilo Petrucci dalam balapan pertama MotoGP 2019 di Qatar karena dianggap ilegal. Pada prosesnya, Dovizioso tampil sebagai pemenang usai mengalahkan Marc Marquez.
          Keempat tim meyakini, komponen itu memiliki fungsi aerodinamis, dan menghasilkan downforce, yang membantu motor melesat di trek. Sementara Ducati bersikukuh komponen itu cuma untuk mendinginkan ban dan sudah disetujui Technical Director sebelum balapan.
          </p>
          <br />
          <Button color='teal' icon labelPosition='plus'>
            Tambah Tautan ke List
            <Icon name='plus' />
          </Button>

        </Container>
      </div>
    );
  }
}

export default App;
