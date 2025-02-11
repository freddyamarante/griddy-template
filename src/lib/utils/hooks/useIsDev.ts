export default function useIsDev () {
  return import.meta.env.NODE_ENV === 'development';
}