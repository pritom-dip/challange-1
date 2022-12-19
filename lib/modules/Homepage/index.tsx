import Button from '@lib/components/Button';
import Checkbox from '@lib/components/Checkbox';
import Input from '@lib/components/Input';
import Select from '@lib/components/Select';
import { ISelector } from '@lib/types/selector';
import { useEffect, useState } from 'react';
import styles from './Homepage.module.scss';
import { ToastContainer, toast } from 'react-toastify';

const Homepage = () => {
  const [name, setName] = useState<string>('');
  const [multiSelected, setMultiSelected] = useState<ISelector[]>([]);
  const [optionArr, setOptionsArr] = useState<ISelector[]>([] as ISelector[]);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchSelectorsData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/selectors', {
          method: 'GET',
          signal
        });
        const { data } = await response.json();
        setOptionsArr(data);
        setIsLoading(false);
      } catch (err) {
        setOptionsArr([]);
        setIsLoading(false);
      }
    };

    fetchSelectorsData();

    return () => controller.abort();
  }, []);

  const checkValidation = () => {
    if (!name || name.trim() === '') {
      toast.error('Please provide a name');
      return false;
    }
    if (multiSelected.length === 0) {
      toast.error('Please select at least one sector');
      return false;
    }
    if (!checkbox) {
      toast.error('You must agree to the terms');
      return false;
    }
    return true;
  };

  const handleSaveButtonClick = async () => {
    if (!checkValidation()) return;

    try {
      const response = await fetch('/api/dataset', {
        method: 'POST',
        body: JSON.stringify({
          name,
          selectors: multiSelected,
          checkbox
        })
      });
      const { data } = await response.json();
      console.log(data);
    } catch (err) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className={styles.container}>
      <ToastContainer />
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
            options={optionArr}
            selected={multiSelected}
            setSelected={setMultiSelected}
            multiple={true}
            size={5}
            isLoading={isLoading}
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
          <Button onClick={handleSaveButtonClick} text="Save" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
