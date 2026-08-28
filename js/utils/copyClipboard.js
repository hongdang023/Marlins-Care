/**
 * Tiện ích sao chép nội dung kịch bản / template với visual feedback
 */
export function copyToClipboard(text, buttonElement) {
  if (!navigator.clipboard) {
    // Fallback
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      showFeedback(buttonElement);
    } catch (err) {
      console.error('Không thể copy', err);
    }
    document.body.removeChild(textArea);
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    showFeedback(buttonElement);
  }).catch(err => {
    console.error('Lỗi khi sao chép:', err);
  });
}

function showFeedback(btn) {
  if (!btn) return;
  const originalText = btn.innerHTML;
  btn.innerHTML = `✓ Đã sao chép!`;
  btn.style.color = `var(--color-milestone)`;
  btn.style.borderColor = `var(--color-milestone)`;
  
  setTimeout(() => {
    btn.innerHTML = originalText;
    btn.style.color = '';
    btn.style.borderColor = '';
  }, 2000);
}
