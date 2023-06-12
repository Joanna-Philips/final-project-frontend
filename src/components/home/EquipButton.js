import * as React from 'react';
import { Button } from '@mui/material';

export const EquipButton = () => {
  const EquipItemClick = () => {}
  return (
    <Button
      sx={{
        color: 'white',
        fontWeight: 700,
        textDecoration: 'none',
        mt: 0,
        mb: 0,
        fontSize: '1rem',
        backgroundColor: '#3d4362',
        width: '50%',
        height: '110%',
        padding: 0,
        pt: 0.25,
        borderStyle: 'outset',
        borderWidth: 'medium',
        borderRadius: '12%',
        borderColor: '#2e3242'
      }}
      size="small"
      onClick={EquipItemClick}>
        Equip
    </Button>
  )
}