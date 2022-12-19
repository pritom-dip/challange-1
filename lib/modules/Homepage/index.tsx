import Button from '@lib/components/Button';
import Checkbox from '@lib/components/Checkbox';
import Input from '@lib/components/Input';
import Select from '@lib/components/Select';
import { useState } from 'react';
import styles from './Homepage.module.scss';

const options = [
  { id: 1, value: 'Manufacturing', label: 'Manufacturing' },
  { id: 2, value: 'Construction materials', label: 'Construction materials' },
  { id: 3, value: 'Electronics and Optics', label: 'Electronics and Optics' },
  { id: 4, value: 'Food and Beverage', label: 'Food and Beverage' },
  {
    id: 5,
    value: 'Bakery & confectionery products',
    label: 'Bakery & confectionery products'
  },
  { id: 6, value: 'Beverages', label: 'Beverages' },
  { id: 7, value: 'Fish & fish products', label: 'Fish & fish products' },
  { id: 8, value: 'Meat & meat products', label: 'Meat & meat products' }
];

const Homepage = () => {
  const [name, setName] = useState('');
  const [multiSelected, setMultiSelected] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </div>

        <div className={styles.inputDiv}>
          <label className={styles.label} htmlFor="name">
            Name:
          </label>
          <Input id="name" type='="text' onChange={setName} value={name} />
        </div>

        <div className={styles.inputDiv}>
          <label>Sectors:</label>
          <Select
            options={options}
            selected={multiSelected}
            setSelected={setMultiSelected}
            multiple={true}
            size={5}
          />
        </div>

        <div>
          <Checkbox
            id="checkbox"
            label="Agree to terms"
            onChange={setCheckbox}
            value={checkbox}
          />
        </div>

        <div>
          <Button onClick={() => {}} text="Save" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
