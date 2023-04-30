import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Buttons from './Buttons';
import Image from './Image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={8}>
        <Item>
          <Image src="icons/rice.png"/>
          쌀
        </Item>
      </Grid>
      <Grid item xs={8}>
        <Item>2열</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>3열</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>4열</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>5열</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>6열</Item>
      </Grid>
    </React.Fragment>
  );
}

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container item spacing={3}> {/* 1행 */}
          <FormRow />
        </Grid>
      </Grid>
      <Buttons title="계산"/>
    </Box>
  );
}