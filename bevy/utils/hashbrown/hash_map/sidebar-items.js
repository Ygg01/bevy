initSidebarItems({"enum":[["Entry","A view into a single entry in a map, which may either be vacant or occupied."],["EntryRef","A view into a single entry in a map, which may either be vacant or occupied, with any borrowed form of the map’s key type."],["RawEntryMut","A view into a single entry in a map, which may either be vacant or occupied."]],"struct":[["Drain","A draining iterator over the entries of a `HashMap` in arbitrary order. The iterator element type is `(K, V)`."],["DrainFilter","A draining iterator over entries of a `HashMap` which don’t satisfy the predicate `f(&k, &mut v)` in arbitrary order. The iterator element type is `(K, V)`."],["HashMap","A hash map implemented with quadratic probing and SIMD lookup."],["IntoIter","An owning iterator over the entries of a `HashMap` in arbitrary order. The iterator element type is `(K, V)`."],["IntoKeys","An owning iterator over the keys of a `HashMap` in arbitrary order. The iterator element type is `K`."],["IntoValues","An owning iterator over the values of a `HashMap` in arbitrary order. The iterator element type is `V`."],["Iter","An iterator over the entries of a `HashMap` in arbitrary order. The iterator element type is `(&'a K, &'a V)`."],["IterMut","A mutable iterator over the entries of a `HashMap` in arbitrary order. The iterator element type is `(&'a K, &'a mut V)`."],["Keys","An iterator over the keys of a `HashMap` in arbitrary order. The iterator element type is `&'a K`."],["OccupiedEntry","A view into an occupied entry in a `HashMap`. It is part of the `Entry` enum."],["OccupiedEntryRef","A view into an occupied entry in a `HashMap`. It is part of the `EntryRef` enum."],["OccupiedError","The error returned by `try_insert` when the key already exists."],["RawEntryBuilder","A builder for computing where in a [`HashMap`] a key-value pair would be stored."],["RawEntryBuilderMut","A builder for computing where in a [`HashMap`] a key-value pair would be stored."],["RawOccupiedEntryMut","A view into an occupied entry in a `HashMap`. It is part of the `RawEntryMut` enum."],["RawVacantEntryMut","A view into a vacant entry in a `HashMap`. It is part of the `RawEntryMut` enum."],["VacantEntry","A view into a vacant entry in a `HashMap`. It is part of the `Entry` enum."],["VacantEntryRef","A view into a vacant entry in a `HashMap`. It is part of the `EntryRef` enum."],["Values","An iterator over the values of a `HashMap` in arbitrary order. The iterator element type is `&'a V`."],["ValuesMut","A mutable iterator over the values of a `HashMap` in arbitrary order. The iterator element type is `&'a mut V`."]],"type":[["DefaultHashBuilder","Default hasher for `HashMap`."]]});