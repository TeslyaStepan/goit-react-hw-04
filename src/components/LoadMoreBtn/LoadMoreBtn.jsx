export default function LoadMoreBtn({ onPageAdd, page }) {
  return (
    <div>{page > 0 && <button onClick={onPageAdd}>Load more</button>}</div>
  );
}
