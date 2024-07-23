const he = {
  app: {
    save: 'שמור',
    keyboard: 'סיים',
    network_error: 'אין חיבור לאינטרנט',
  },
  error_screen: {
    title: 'התרחשה שגיאה!',
    button: 'אפס את האפליקציה',
  },
  error: {
    id_is_required: 'חובה למלא תעודת זהות',
    id_is_not_valid: 'תעודת זהות לא תקינה',
    phone_is_required: 'חובה למלא מספר טלפון',
    phone_is_not_valid: 'מספר טלפון לא תקין',
    password_is_required: 'חובה למלא סיסמה',
  },
  home: {
    title: 'ברוכים הבאים',
  },
};

export default he;
export type Translations = typeof he;
