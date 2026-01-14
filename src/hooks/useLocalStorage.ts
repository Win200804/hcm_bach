// ============================================
// Custom hook quản lý localStorage
// ============================================

import { useState, useEffect } from 'react';

// Hook để sử dụng localStorage với React state
export function useLocalStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // Lấy giá trị từ localStorage hoặc dùng initialValue
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  // Hàm cập nhật giá trị
  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      // Cho phép value là function
      const valueToStore = value instanceof Function 
        ? value(storedValue) 
        : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}

// Hook để đồng bộ state với localStorage
export function useSyncedStorage<T>(
  key: string, 
  initialValue: T
): [T, (value: T) => void, () => void] {
  const [value, setValue] = useLocalStorage<T>(key, initialValue);

  // Hàm xóa giá trị
  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setValue(initialValue);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  };

  // Lắng nghe thay đổi từ tab khác
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue) {
        setValue(JSON.parse(e.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, setValue]);

  return [value, setValue, removeValue];
}

