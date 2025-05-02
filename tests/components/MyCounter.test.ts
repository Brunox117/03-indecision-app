import { describe, test } from 'vitest';
import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';

describe('Testing MyCounter', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 4,
      },
    });
  });
});
