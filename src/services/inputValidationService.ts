import { t } from '@/i18n';

export interface ResultValidationProp {
  status: boolean;
  errorMsg: string;
}

// there will not be ID lower than 8 digits
export function checkIdentity(id: string): ResultValidationProp {
  if (id === '') {
    return { status: false, errorMsg: t('error.id_is_required') };
  } else if (id.length < 8 || !+id) {
    return { status: false, errorMsg: t('error.id_is_not_valid') };
  } else {
    return { status: true, errorMsg: '' };
  }
}

export function checkPassword(password: string): ResultValidationProp {
  if (password === '') {
    return { status: false, errorMsg: t('error.password_is_required') };
  } else {
    return { status: true, errorMsg: '' };
  }
}

// phone number composed of 10 digits i.e 0500000000 but can be larger (+001-1-1234567890)
export function checkPhone(phone: string): ResultValidationProp {
  if (phone === '') {
    return { status: false, errorMsg: t('error.phone_is_required') };
  } else if (phone.length < 10 || !+phone) {
    return { status: false, errorMsg: t('error.phone_is_not_valid') };
  } else {
    return { status: true, errorMsg: '' };
  }
}

export function isValidDecimalNumber(value: string, isPositiveOnly = false) {
  // Regular expression pattern for acceptable characters: digits, dot, minus sign
  let pattern: RegExp;
  switch (isPositiveOnly) {
    case true:
      pattern = /^[0-9]+(\.[0-9]*)?$/;
      if (value.length === 2 && value === '00') {
        return false;
      }
      if (value.length === 0) {
        return true;
      }
      return pattern.test(value);

    case false:
      pattern = /^[-+]?[0-9]+(\.[0-9]*)?$/;
      if (value.length === 2 && value === '00') {
        return false;
      }
      if (value.length === 0) {
        return true;
      }
      if (value.length === 1 && value === '-') {
        return true;
      }
      return pattern.test(value);
  }
}
